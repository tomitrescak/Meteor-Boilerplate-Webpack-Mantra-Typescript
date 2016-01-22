declare module __ReactMixin {
  export var decorate: any; //(what: any): void;
  export function onClass(cls: Function, mixin: any): void;
}

declare module "react-mixin" {
  export default __ReactMixin;
}
