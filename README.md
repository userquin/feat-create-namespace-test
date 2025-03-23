# Testing creating CJS namespace

https://github.com/userquin/fix-dts-default-cjs-exports/pull/11

## Node16 (CJS)

```json
{
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "node16"
  }
}
```

## Node10 (CJS)

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "node"
  }
}
```
