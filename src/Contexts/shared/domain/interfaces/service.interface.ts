export interface IService<Input, Output> {
  run(input: Input): Promise<Output>
}
