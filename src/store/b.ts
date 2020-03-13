import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ name: 'b', dynamic: true, namespaced: true, store })
export default class B extends VuexModule {
  name = 'moduleB'

  @Mutation
  changeName(name: string) {
    this.name = name
  }
}


export const ModuleB = getModule(B);