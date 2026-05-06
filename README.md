# Crash Rocket

## 启动流程
1. 加载空场景
- `Launcher.fire`是一个空场景，加载速度会很快，避免加载主场景耗时导致首帧出现之前黑屏问题；
- 激活`GameFramework`框架，启动游戏加载流程；
- `ProcedureComponent`流程启动入口；
2. 播放加载动画
- `ProcedureSplash.ts`控制加载动画播放；
3. 预加载资源
- `ProcedurePreload.ts`控制资源预加载；
  - 主场景`Main.fire`预加载；
  - 多语言资源预加载；
4. 用户登录
- `ProcedureLogin.ts`控制用户登录；
5. 加载主场景
- `ProcedureChangeScene.ts`控制主场景加载；
  - 停止加载动画；
  - 进入主场景；

## 数据组织
纯数据逻辑相关建议继承自`AbsModule`类，具体用法可以参考`LoginModule`;

## 日志
日志打印建议统一使用框架提供的`gea.info`、`gea.warn`、`gea.error`等方法，避免使用`console.log`等方法；
方便对log输出做一些统一处理，如：根据游戏加上前缀等；

## 多语言
1. 对于固定文案，可以在`cc.Label`节点下直接挂载`TextLocalizationComponent.ts`脚本，填入对应的多语言key；
2. 对于动态文案，使用下面方式获取多语言文本：

```typescript
import {getFrameworkModule} from "./GameFrameworkEntry";
import LocalizationModule from "./LocalizationModule";

const text = getFrameworkModule(LocalizationModule).getText("key", "param1", "param2");
```

## 资源加载
建议使用`Resource`模块提供的资源加载方法，避免使用`cc.loader.loadRes`等方法；

```typescript
import {getFrameworkModule} from "./GameFrameworkEntry";
import ResourceModule from "./ResourceModule";

getFrameworkModule(ResourceModule).loadAsset("prefab/Test", cc.Prefab, (error, asset) => {
})
```

## 本地存储
建议使用`Setting`模块提供的本地存储方法，避免使用`cc.sys.localStorage`等方法；
`Setting`模块区分`App`和`User`存储；

```typescript
import {getFrameworkModule} from "./GameFrameworkEntry";
import {AppSettingModule} from "./AppSettingModule";

getFrameworkModule(AppSettingModule).setBoolean("test", false)

getFrameworkModule(AppSettingModule).getBoolean("test", false)
```

## 图片加载
建议使用`ImageLoader`提供的图片加载方法，避免使用`cc.loader.loadRes`等方法；
```typescript
// 加载本地图片
ImageLoader.loadlocal(path: string, sprite: cc.Sprite, onComplete?: (success: boolean) => void)

// 加载网络图片
ImageLoader.loadRemote(url: string, sprite: cc.Sprite, onComplete?: (success: boolean) => void)
```

