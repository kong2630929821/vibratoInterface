<template>
    <div class="index">
        <div class="content">
            <div class="top">
                <div v-for="(v,i) of topInfo" :key="i" class="topContent">
                    <i class="el-icon-caret-top"></i>
                    <span>{{v.key}}：</span>
                    <span class="boldFont">{{v.value}}</span>
                </div>
            </div>
            <div class="box">
                <img :src="src" alt="图片" class="imgBox"/>
            </div>
            <div class="inputIn">
                <el-input :placeholder="placeholder" v-model="videoSrc" clearable></el-input>
                <el-button type="primary" :icon="icon">解析视频</el-button>
            </div>
            <div class="bottom">
                <div class="bottomTitle">
                    <img :src="problemImg" alt="图片" class="problemImg"/>
                    <div class="fontTitle">常见的问题说明</div>
                </div>
                <div v-for="(v,i) of problemInfo" :key="i" class="problemItem">
                    <div class="itemKey">{{v.key}}</div>
                    <div class="itemValue">
                        {{v.value}}
                        <a :href="v.src" class="aHref">{{v.srcText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Index',
    data () {
        return {
            // 顶部介绍
            topInfo:[
                {key:'功能介绍',value:'短视频去水印解析下载'},
                {key:'支持平台',value:'火山、皮皮虾、今日头条、西瓜视频、小咖秀、趣多拍、抖音、快手、微视、美拍、最右、网易云、TikTok、哔哩哔哩、陌陌、映客、迅雷、阳光宽频、全民K歌、刷宝、WIDE短视频、小红书、Instagram、小影、晃咖、趣多拍、优酷、网易云音乐、YouTube、FaceBook'},
                {key:'使用方式',value:'将小视频的链接复制到输入框，然后点击解析 图文教程点击页面底部的【使用教程】'}
            ],
            src:'http://douyin.shulijp.com/img/xcx.jpg',//图片路径
            placeholder:'请复制APP分享链接到这里',//视频链接的提示文字
            videoSrc:'',//视频链接
            problemImg:'http://douyin.shulijp.com/img/iImg8.png',//问题图标
            //问题列表
            problemInfo:[
                {key:'1. Android手机上可以用吗？',value:'可以，Android手机在常用的Chrome、UC、360、QQ等浏览器上都可以很方便的使用本站。推荐使用Chrome浏览器获得最佳下载体验。'},
                {key:'2. iOS设备（iPhone、iPad、iPod）上点击下载视频按钮后，跳转到视频页面，并没有直接下载，怎么办？？',value:'因Safari及微信内置浏览器均不支持下载文件，所以保存视频需要借助第三方App来完成下载，建议iOS用户在App Store下载免费的Documents 6，然后在Documents的内置浏览器中使用本站，可以完美下载视频，并且Documents支持将下载的视频移到手机相册。参考: ',src:'https://www.jianshu.com/p/8a11cb308212',srcText:'iPhone上利用Documents下载和管理视频教程'},
                {key:'3. 我在电脑上用的是IE浏览器，点下载视频按钮后，出现跟上面那用iPad的哥们一样的情况，跳转到视频页面，如何下载到本地呢？',value:'电脑上少数浏览器不支持直接下载，但可以在下载视频按钮上点击右键，然后选择"目标另存为"或"链接存储为"来下载视频；或者到跳转后的视频页面，在视频画面上点击右键，然后选择"视频另存为"来下载视频。当然，我们更推荐在电脑上使用如谷歌Chrome浏览器、360浏览器极速模式、QQ浏览器极速模式等现代浏览器来获得最佳上网体验。'},
                {key:'4. 怎么查看我的剩余次数？',value:'点击头像 → 我的资料 ，同时有以下方式可获取额外的解析金额奖励：新注册、邀请好友、每日赠送等途径，解析次数用完之后可通过充值获取额外解析次数'}
            ],
            icon:'el-icon-loading',//搜索框的图标  默认是 el-icon-search 搜索 点击后变成 el-icon-loading 加载状态 

        }
    }

}
</script>

<style lang="less">
    .index{
        display: flex;
        flex-direction: column;
        align-items: center;
        .content{
            .top{
                overflow: hidden;
                max-width: 1000px;
                .topContent{
                    font-size: 12px;
                    margin-top: 8px;
                    span{
                        line-height: 20px;
                    }
                    .boldFont{
                        font-weight: 700;
                    }
                }
            }
            .box{
                display: flex;
                justify-content: center;
                .imgBox{
                    width: 108px;
                    height: 108px;
                    padding: 10px 0;
                }
            }
            .inputIn{
                display: flex;
                .el-input__inner{
                    border-radius: 4px 0 0 4px;
                }
                .el-button{
                    padding: 4px 9px;
                    border-radius: 0 4px 4px 0;
                }
            }
            .bottom{
                overflow: hidden;
                max-width: 1000px;
                .bottomTitle{
                    display: flex;
                    margin-top: 15px;
                    .problemImg{
                        width: 23px;
                        height: 20px;
                    }
                    .fontTitle{
                        font-size: 16px;
                        color: #333333;
                        font-weight: 600;
                    }
                }
                .problemItem{
                    margin-top: 15px;
                    overflow: hidden;
                    .itemKey{
                        color: #333;
                        line-height: 24px;
                    }
                    .itemValue{
                        font-size: 14px;
                        color: #666;
                        line-height: 24px;
                        margin-top: 6px;
                        .aHref{
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
</style>