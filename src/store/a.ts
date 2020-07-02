import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ name: 'a', dynamic: true, namespaced: true, store })
export default class A extends VuexModule {
  name = 'moduleA'
  data: object | void = {
    id: 1001
  }

  @Mutation
  changeName(name: string) {
    this.name = name
  }
  @Mutation
  changeData(data: object | void) {
    this.data = {
      ...this.data,
      ...data
    }
  }

  @Action
  asyncChangeName () {
    setTimeout(() => {
      this.changeName('aaa')
    }, 200)
  }
  @Action
  asyncChangeData () {
    setTimeout(() => {
      this.changeData({ a: 'sss'})    // 调 Mutation 改变 state
      this.asyncChangeName()          // 调 Action
    }, 200)
  }

}

export const ModuleA = getModule(A);