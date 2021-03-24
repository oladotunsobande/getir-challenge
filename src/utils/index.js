export function throwIfUndefined(env, name) {
  if (env === undefined) {
    throw new Error(`${name} must not be undefined`);
  }
  
  return env;
}