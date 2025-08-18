import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  /**
     * 
    The providers array is used to define the services
     (or classes) that are available within the module.
     These services are typically injectable and can be
     used by other components (e.g., controllers,
    other services) within the same module.
    */
  providers: [AxiosAdapter],

  /**
   * The exports array specifies which providers from the
   * current module should be made available to other modules
   * that import this module.
   */
  exports: [AxiosAdapter],
})
export class CommonModule {}
