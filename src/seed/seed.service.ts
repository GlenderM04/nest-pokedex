import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/pokemon-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  // Debemos inyectar el servicio de PokemonService para poder usarlo
  constructor(private readonly pokemonService: PokemonService) {}

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    for (const pokemon of data.results) {
      const segments = pokemon.url.split('/');
      const no = segments[segments.length - 2];

      try {
        await this.pokemonService.create({
          name: pokemon.name,
          no: parseInt(no, 10),
        });
        console.log(`Pokemon "${pokemon.name}" created successfully`);
      } catch (error) {
        this.handleExceptions(error);
        console.error(`Failed to create Pokemon "${pokemon.name}":`, error);
      }
    }

    return {
      message: 'Seed executed successfully',
      count: data.results.length,
    };
  }

  private handleExceptions(error: any) {
    console.error('Error during seed execution:', error);
    throw new InternalServerErrorException(
      'An error occurred while executing the seed',
    );
  }
}
