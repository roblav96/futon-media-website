{
  [36mmode[39m: [31m'development'[39m,
  [36mcontext[39m: [31m'/Users/roblav96/Projects/futon-media-website'[39m,
  [36mdevtool[39m: [31m'eval-source-map'[39m,
  [36mnode[39m: {
    [36msetImmediate[39m: [34mfalse[39m,
    [36mprocess[39m: [31m'mock'[39m,
    [36mdgram[39m: [31m'empty'[39m,
    [36mfs[39m: [31m'empty'[39m,
    [36mnet[39m: [31m'empty'[39m,
    [36mtls[39m: [31m'empty'[39m,
    [36mchild_process[39m: [31m'empty'[39m
  },
  [36moutput[39m: {
    [36mpath[39m: [31m'/Users/roblav96/Projects/futon-media-website/dist'[39m,
    [36mfilename[39m: [31m'js/[name].js'[39m,
    [36mpublicPath[39m: [31m'/'[39m,
    [36mchunkFilename[39m: [31m'js/[name].js'[39m
  },
  [36mresolve[39m: {
    [36malias[39m: {
      [31m'@'[39m: [31m'/Users/roblav96/Projects/futon-media-website/src'[39m,
      [36mvue$[39m: [31m'vue/dist/vue.runtime.esm.js'[39m
    },
    [36mextensions[39m: [
      [31m'.tsx'[39m,
      [31m'.ts'[39m,
      [31m'.mjs'[39m,
      [31m'.js'[39m,
      [31m'.jsx'[39m,
      [31m'.vue'[39m,
      [31m'.json'[39m,
      [31m'.wasm'[39m
    ],
    [36mmodules[39m: [
      [31m'node_modules'[39m,
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules'[39m,
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules/@vue/cli-service/node_modules'[39m
    ]
  },
  [36mresolveLoader[39m: {
    [36mmodules[39m: [
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules/@vue/cli-plugin-typescript/node_modules'[39m,
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules/@vue/cli-plugin-babel/node_modules'[39m,
      [31m'node_modules'[39m,
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules'[39m,
      [31m'/Users/roblav96/Projects/futon-media-website/node_modules/@vue/cli-service/node_modules'[39m
    ]
  },
  [36mmodule[39m: {
    [36mnoParse[39m: [31m/^(vue|vue-router|vuex|vuex-router-sync)$/[39m,
    [36mrules[39m: [
      [32m/* config.module.rule('vue') */[39m
      {
        [36mtest[39m: [31m/\.vue$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('vue').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'cache-loader'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'/Users/roblav96/Projects/futon-media-website/node_modules/.cache/vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'608f0660'[39m
            }
          },
          [32m/* config.module.rule('vue').use('vue-loader') */[39m
          {
            [36mloader[39m: [31m'vue-loader'[39m,
            [36moptions[39m: {
              [36mcompilerOptions[39m: {
                [36mwhitespace[39m: [31m'condense'[39m
              },
              [36mcacheDirectory[39m: [31m'/Users/roblav96/Projects/futon-media-website/node_modules/.cache/vue-loader'[39m,
              [36mcacheIdentifier[39m: [31m'608f0660'[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('images') */[39m
      {
        [36mtest[39m: [31m/\.(png|jpe?g|gif|webp)(\?.*)?$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('images').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'url-loader'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'file-loader'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('svg') */[39m
      {
        [36mtest[39m: [31m/\.(svg)(\?.*)?$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('svg').use('file-loader') */[39m
          {
            [36mloader[39m: [31m'file-loader'[39m,
            [36moptions[39m: {
              [36mname[39m: [31m'img/[name].[hash:8].[ext]'[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('media') */[39m
      {
        [36mtest[39m: [31m/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('media').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'url-loader'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'file-loader'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'media/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('fonts') */[39m
      {
        [36mtest[39m: [31m/\.(woff2?|eot|ttf|otf)(\?.*)?$/i[39m,
        [36muse[39m: [
          [32m/* config.module.rule('fonts').use('url-loader') */[39m
          {
            [36mloader[39m: [31m'url-loader'[39m,
            [36moptions[39m: {
              [36mlimit[39m: [32m4096[39m,
              [36mfallback[39m: {
                [36mloader[39m: [31m'file-loader'[39m,
                [36moptions[39m: {
                  [36mname[39m: [31m'fonts/[name].[hash:8].[ext]'[39m
                }
              }
            }
          }
        ]
      },
      [32m/* config.module.rule('pug') */[39m
      {
        [36mtest[39m: [31m/\.pug$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('pug').oneOf('pug-vue') */[39m
          {
            [36mresourceQuery[39m: [31m/vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          },
          [32m/* config.module.rule('pug').oneOf('pug-template') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('pug').oneOf('pug-template').use('raw') */[39m
              {
                [36mloader[39m: [31m'raw-loader'[39m
              },
              [32m/* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */[39m
              {
                [36mloader[39m: [31m'pug-plain-loader'[39m
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('css') */[39m
      {
        [36mtest[39m: [31m/\.css$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('css').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('css').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('css').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('css').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('postcss') */[39m
      {
        [36mtest[39m: [31m/\.p(ost)?css$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('postcss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('postcss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('scss') */[39m
      {
        [36mtest[39m: [31m/\.scss$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('scss').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('scss').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('scss').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('sass') */[39m
      {
        [36mtest[39m: [31m/\.sass$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('sass').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('vue').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          },
          [32m/* config.module.rule('sass').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('sass').oneOf('normal').use('sass-loader') */[39m
              {
                [36mloader[39m: [31m'sass-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimplementation[39m: {
                    [36mrun_[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrender[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36mrenderSync[39m: [33m[34mfunction[33m () [39m{
                      [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                    },
                    [36minfo[39m: [31m'dart-sass\t1.23.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.2\t(Dart Compiler)\t[Dart]'[39m,
                    [36mtypes[39m: {
                      [36mBoolean[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mColor[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mList[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mMap[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNull[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mNumber[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mString[39m: [33m[34mfunction[33m () [39m{
                        [34mreturn[39m _call(f, [34mthis[39m, [36mArray[39m.prototype.slice.apply([36marguments[39m));
                      },
                      [36mError[39m: [33m[34mfunction[33m Error() [39m{ [native code] }
                    }
                  },
                  [36msassOptions[39m: {
                    [36mindentedSyntax[39m: [34mtrue[39m
                  }
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('less') */[39m
      {
        [36mtest[39m: [31m/\.less$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('less').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('vue').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal-modules').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('less').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('less').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('less').oneOf('normal').use('less-loader') */[39m
              {
                [36mloader[39m: [31m'less-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('stylus') */[39m
      {
        [36mtest[39m: [31m/\.styl(us)?$/[39m,
        [36moneOf[39m: [
          [32m/* config.module.rule('stylus').oneOf('vue-modules') */[39m
          {
            [36mresourceQuery[39m: [31m/module/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('vue') */[39m
          {
            [36mresourceQuery[39m: [31m/\?vue/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal-modules') */[39m
          {
            [36mtest[39m: [31m/\.module\.\w+$/[39m,
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m,
                  [36mmodules[39m: {
                    [36mlocalIdentName[39m: [31m'[name]_[local]_[hash:base64:5]'[39m
                  }
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          },
          [32m/* config.module.rule('stylus').oneOf('normal') */[39m
          {
            [36muse[39m: [
              [32m/* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */[39m
              {
                [36mloader[39m: [31m'vue-style-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mshadowMode[39m: [34mfalse[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('css-loader') */[39m
              {
                [36mloader[39m: [31m'css-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mimportLoaders[39m: [32m2[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */[39m
              {
                [36mloader[39m: [31m'postcss-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m
                }
              },
              [32m/* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */[39m
              {
                [36mloader[39m: [31m'stylus-loader'[39m,
                [36moptions[39m: {
                  [36msourceMap[39m: [34mtrue[39m,
                  [36mpreferPathResolver[39m: [31m'webpack'[39m
                }
              }
            ]
          }
        ]
      },
      [32m/* config.module.rule('js') */[39m
      {
        [36mtest[39m: [31m/\.m?jsx?$/[39m,
        [36mexclude[39m: [
          [33m[34mfunction[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36muse[39m: [
          [32m/* config.module.rule('js').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'cache-loader'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'/Users/roblav96/Projects/futon-media-website/node_modules/.cache/babel-loader'[39m,
              [36mcacheIdentifier[39m: [31m'2b4c49cd'[39m
            }
          },
          [32m/* config.module.rule('js').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'babel-loader'[39m
          }
        ]
      },
      [32m/* config.module.rule('ts') */[39m
      {
        [36mtest[39m: [31m/\.ts$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('ts').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'cache-loader'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'/Users/roblav96/Projects/futon-media-website/node_modules/.cache/ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'5f78db74'[39m
            }
          },
          [32m/* config.module.rule('ts').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'babel-loader'[39m
          },
          [32m/* config.module.rule('ts').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'ts-loader'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mappendTsSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ],
              [36mhappyPackMode[39m: [34mfalse[39m
            }
          }
        ]
      },
      [32m/* config.module.rule('tsx') */[39m
      {
        [36mtest[39m: [31m/\.tsx$/[39m,
        [36muse[39m: [
          [32m/* config.module.rule('tsx').use('cache-loader') */[39m
          {
            [36mloader[39m: [31m'cache-loader'[39m,
            [36moptions[39m: {
              [36mcacheDirectory[39m: [31m'/Users/roblav96/Projects/futon-media-website/node_modules/.cache/ts-loader'[39m,
              [36mcacheIdentifier[39m: [31m'5f78db74'[39m
            }
          },
          [32m/* config.module.rule('tsx').use('babel-loader') */[39m
          {
            [36mloader[39m: [31m'babel-loader'[39m
          },
          [32m/* config.module.rule('tsx').use('ts-loader') */[39m
          {
            [36mloader[39m: [31m'ts-loader'[39m,
            [36moptions[39m: {
              [36mtranspileOnly[39m: [34mtrue[39m,
              [36mhappyPackMode[39m: [34mfalse[39m,
              [36mappendTsxSuffixTo[39m: [
                [31m'\\.vue$'[39m
              ]
            }
          }
        ]
      }
    ]
  },
  [36moptimization[39m: {
    [36msplitChunks[39m: {
      [36mcacheGroups[39m: {
        [36mvendors[39m: {
          [36mname[39m: [31m'chunk-vendors'[39m,
          [36mtest[39m: [31m/[\\/]node_modules[\\/]/[39m,
          [36mpriority[39m: [32m-10[39m,
          [36mchunks[39m: [31m'initial'[39m
        },
        [36mcommon[39m: {
          [36mname[39m: [31m'chunk-common'[39m,
          [36mminChunks[39m: [32m2[39m,
          [36mpriority[39m: [32m-20[39m,
          [36mchunks[39m: [31m'initial'[39m,
          [36mreuseExistingChunk[39m: [34mtrue[39m
        }
      }
    },
    [36mminimizer[39m: [
      [32m/* config.optimization.minimizer('terser') */[39m
      [34mnew[39m TerserPlugin(
        {
          [36mterserOptions[39m: {
            [36mcompress[39m: {
              [36marrows[39m: [34mfalse[39m,
              [36mcollapse_vars[39m: [34mfalse[39m,
              [36mcomparisons[39m: [34mfalse[39m,
              [36mcomputed_props[39m: [34mfalse[39m,
              [36mhoist_funs[39m: [34mfalse[39m,
              [36mhoist_props[39m: [34mfalse[39m,
              [36mhoist_vars[39m: [34mfalse[39m,
              [36minline[39m: [34mfalse[39m,
              [36mloops[39m: [34mfalse[39m,
              [36mnegate_iife[39m: [34mfalse[39m,
              [36mproperties[39m: [34mfalse[39m,
              [36mreduce_funcs[39m: [34mfalse[39m,
              [36mreduce_vars[39m: [34mfalse[39m,
              [36mswitches[39m: [34mfalse[39m,
              [36mtoplevel[39m: [34mfalse[39m,
              [36mtypeofs[39m: [34mfalse[39m,
              [36mbooleans[39m: [34mtrue[39m,
              [36mif_return[39m: [34mtrue[39m,
              [36msequences[39m: [34mtrue[39m,
              [36munused[39m: [34mtrue[39m,
              [36mconditionals[39m: [34mtrue[39m,
              [36mdead_code[39m: [34mtrue[39m,
              [36mevaluate[39m: [34mtrue[39m
            },
            [36mmangle[39m: {
              [36msafari10[39m: [34mtrue[39m
            }
          },
          [36msourceMap[39m: [34mtrue[39m,
          [36mcache[39m: [34mtrue[39m,
          [36mparallel[39m: [34mtrue[39m,
          [36mextractComments[39m: [34mfalse[39m
        }
      )
    ]
  },
  [36mplugins[39m: [
    [32m/* config.plugin('vue-loader') */[39m
    [34mnew[39m VueLoaderPlugin(),
    [32m/* config.plugin('define') */[39m
    [34mnew[39m DefinePlugin(
      {
        [31m'process.env'[39m: {
          [36mNODE_ENV[39m: [31m'"development"'[39m,
          [36mBASE_URL[39m: [31m'"/"'[39m
        }
      }
    ),
    [32m/* config.plugin('case-sensitive-paths') */[39m
    [34mnew[39m CaseSensitivePathsPlugin(),
    [32m/* config.plugin('friendly-errors') */[39m
    [34mnew[39m FriendlyErrorsWebpackPlugin(
      {
        [36madditionalTransformers[39m: [
          [33m[34mfunction[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36madditionalFormatters[39m: [
          [33m[34mfunction[33m () [39m{ [32m/* omitted long function */[39m }
        ],
        [36mclearConsole[39m: [34mfalse[39m
      }
    ),
    [32m/* config.plugin('html') */[39m
    [34mnew[39m HtmlWebpackPlugin(
      {
        [36mtemplateParameters[39m: [33m(compilation, assets, pluginOptions) =>[39m {
          [32m// enhance html-webpack-plugin's built in template params[39m
          [34mlet[39m stats
          [34mreturn[39m [36mObject[39m.assign({
            [32m// make stats lazy as it is expensive[39m
            [34mget[39m webpack () {
              [34mreturn[39m stats || (stats = compilation.getStats().toJson())
            },
            [36mcompilation[39m: compilation,
            [36mwebpackConfig[39m: compilation.options,
            [36mhtmlWebpackPlugin[39m: {
              [36mfiles[39m: assets,
              [36moptions[39m: pluginOptions
            }
          }, resolveClientEnv(options, [34mtrue[39m [32m/* raw */[39m))
        },
        [36mtemplate[39m: [31m'/Users/roblav96/Projects/futon-media-website/public/index.html'[39m
      }
    ),
    [32m/* config.plugin('preload') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'preload'[39m,
        [36minclude[39m: [31m'initial'[39m,
        [36mfileBlacklist[39m: [
          [31m/\.map$/[39m,
          /hot-update\.js$/
        ]
      }
    ),
    [32m/* config.plugin('prefetch') */[39m
    [34mnew[39m PreloadPlugin(
      {
        [36mrel[39m: [31m'prefetch'[39m,
        [36minclude[39m: [31m'asyncChunks'[39m
      }
    ),
    [32m/* config.plugin('copy') */[39m
    [34mnew[39m CopyPlugin(
      [
        {
          [36mfrom[39m: [31m'/Users/roblav96/Projects/futon-media-website/public'[39m,
          [36mto[39m: [31m'/Users/roblav96/Projects/futon-media-website/dist'[39m,
          [36mtoType[39m: [31m'dir'[39m,
          [36mignore[39m: [
            [31m'.DS_Store'[39m,
            {
              [36mglob[39m: [31m'index.html'[39m,
              [36mmatchBase[39m: [34mfalse[39m
            }
          ]
        }
      ]
    ),
    [32m/* config.plugin('fork-ts-checker') */[39m
    [34mnew[39m ForkTsCheckerWebpackPlugin(
      {
        [36mvue[39m: [34mtrue[39m,
        [36mtslint[39m: [34mfalse[39m,
        [36mformatter[39m: [31m'codeframe'[39m,
        [36mcheckSyntacticErrors[39m: [34mfalse[39m
      }
    )
  ],
  [36mentry[39m: {
    [36mapp[39m: [
      [31m'./src/main.ts'[39m
    ]
  }
}
