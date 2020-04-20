export function promised(obj: any): Promise<any> {
  switch ((obj || {}).constructor.name) {
    case 'Promise':
    case 'AsyncFunction':
      return obj.then((data: any) => [null, data]).catch((err: any) => [err]);
    default:
      return Promise.resolve(obj).then(() => [null, obj]);
  }
}
