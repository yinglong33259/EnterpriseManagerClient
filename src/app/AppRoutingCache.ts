import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AppRoutingCache implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  public static deleteNotCachedStoredRouteSnapshotPath: string;
  // 表示对路由允许复用
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 默认对所有路由复用 可通过给路由配置项增加data: { keep: true }来进行选择性使用，代码如下
    if (!route.data.keep) {
      return false;
    }
    return true;
  }
  // 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (AppRoutingCache.deleteNotCachedStoredRouteSnapshotPath !== route.routeConfig.path ) {
      AppRoutingCache.handlers[route.routeConfig.path] = handle;
    }
    AppRoutingCache.deleteNotCachedStoredRouteSnapshotPath = null;
  }
  // 若path在缓存中有的都认为允许还原路由
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!AppRoutingCache.handlers[route.routeConfig.path];
  }
  // 从缓存中获取快照，若无则返回null
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return AppRoutingCache.handlers[route.routeConfig.path];
  }
  // 进入路由触发，判断是否同一路由
  public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }
  // 删除路由快照
  public static deleteRouteSnapshot(name: string): void {
    AppRoutingCache.deleteNotCachedStoredRouteSnapshotPath = name;
    if (AppRoutingCache.handlers[name]) {
      delete AppRoutingCache.handlers[name];
    }
  }
  // 删除所有路由快照
  public static deleteAllRouteSnapshot(): void {
    for( let key in AppRoutingCache.handlers ) {
      delete AppRoutingCache.handlers[key];
    }
  }

}
