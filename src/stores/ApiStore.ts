import { defineStore } from 'pinia';
import { AjaxConfig } from 'rxjs/ajax';
import {
  Configuration,
  ConfigurationParameters,
  Middleware,
  PostControllerApi,
} from 'src/api';
import { useAuthStore } from './auth';

class BusMiddleware implements Middleware {
  private jwt: string = '';

  public setJwt(jwt: string) {
    this.jwt = jwt;
  }

  public pre(request: AjaxConfig): AjaxConfig {
    request.headers['authorization'] = this.getJwt();

    return request;
  }

  public getJwt(): string {
    if (this.jwt === '' || this.jwt === void 0) {
      return window.localStorage.getItem('jwt');
    }

    return this.jwt;
  }
}

interface ApiStoreState {
  busMiddleware: BusMiddleware;
}

export const useApiStore = defineStore('apiStore', {
  state: (): ApiStoreState => ({
    busMiddleware: new BusMiddleware(),
  }),

  getters: {
    getPostControllerApi(): PostControllerApi {
      const configuration: Configuration = this.getConfiguration;
      const api: PostControllerApi = new PostControllerApi(configuration);

      return api;
    },

    getConfiguration(): Configuration {
      const configuraitonParams: ConfigurationParameters =
        this.getConfigurationParameters();
      const configuration: Configuration = new Configuration(
        configuraitonParams
      );

      return configuration;
    },

    getConfigurationParameters(): () => ConfigurationParameters {
      return (): ConfigurationParameters => {
        const middlewares: Middleware[] = [this.busMiddleware];
        const jwt = this.busMiddleware.getJwt();

        const configuraitonParams: ConfigurationParameters = {
          apiKey: jwt,
          middleware: middlewares,
        };

        return configuraitonParams;
      };
    },
  },

  actions: {
    setJwt(jwt: string): void {
      window.localStorage.setItem('jwt', jwt);
      this.storeJwt(jwt);
    },

    storeJwt(jwt: string): void {
      this.busMiddleware.setJwt(jwt);
    },
  },
});
