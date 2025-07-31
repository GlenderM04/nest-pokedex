import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    // Limpiar la colección
    await this.pokemonModel.deleteMany({});
    // Obtener los Pokémon de la API
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=300',
    );

    // variable para almacenar los Pokémon
    const pokemonToInsert: { name: string; no: number }[] = [];

    // Insertar los Pokémon en la base de datos
    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const no = segments[segments.length - 2];
      pokemonToInsert.push({ name: name.toLowerCase(), no: Number(no) });
    }

    // Insertar en la base de datos
    try {
      await this.pokemonModel.insertMany(pokemonToInsert);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error inserting Pokémon into the database',
      );
    }

    return {
      message: 'Seed executed successfully',
      pokemons: data.results.length,
    };
  }
}
