<template>
    <div>
        <div class="tabBar">
            <div class="logoImg" v-show="screenWidth>414">
                <img :src="logo.src" alt="这是一个logo" class="logo"/>
                <div class="logoContent">
                    <div class="LognTitle">{{logo.title}}</div>
                    <div class="description">{{logo.description}}</div>
                </div>
            </div>
            <div class="tabList">
                <div class="menu" @click="meumClick" v-show="screenWidth<=414">
                    <div class="menu-1" v-for="(v,i) in menuActive.arr[menuActive.fg]" :key="i" :style="'width:'+v+'px'"></div>
                </div>
                <div class="tabList-1" v-show="screenWidth>414">
                    <div class="tabListItem" v-for="(v,i) in tabList" :key="i" :class="{'tabActive':i==activeIndex}" @click="checkTab(i)">{{v}}</div>
                </div>
            </div>
            <div class="login">
                <el-row>
                    <el-button type="primary">登录</el-button>
                    <el-button type="success">注册</el-button>
                </el-row>
            </div>
        </div>
        <div class="tabList-2" v-show="screenWidth<=414 && menuActive.fg==1">
            <div class="tabListItem" v-for="(v,i) in tabList" :key="i" :class="{'tabActiveApp':i==activeIndex}" @click="checkTab(i)">{{v}}</div>
        </div>
    </div>
</template>



<script>
export default {
    name:'NavigationBar',
    data () {
        return {
            logo:{
                src:'../../static/images/logo/logo.png',//logo图片地址
                title:'LOGO',//logo名字
                description:'一个去除水印的网站'
            },
            tabList:['首页','批量去水印（按链接）','批量去水印（按用户）','视频伪原创','无水印视频仓库','QQ客服'],
            activeIndex:0,//tab切换的当前下标
            screenWidth: document.body.clientWidth,   //默认屏幕宽度
            timer:null,
            menuActive:{
                fg:0,//默认样式
                arr:[[42,42,42],[33,22,42]]//样式宽度数组
            }
        }
    },
    methods:{
        checkTab(num){
            //切换tab
            this.activeIndex=num;
            this.menuActive.fg=0
        },
        meumClick(){
            //手机端下拉菜单展开
            this.menuActive.fg=this.menuActive.fg?0:1
        }
    },
    mounted(){
        //获取屏幕宽度
        const _this = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                _this.screenWidth = window.screenWidth
            })()
        }
    },
    watch: {
        //监听屏幕宽度
        screenWidth (val) {
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                const _this = this;
                setTimeout(function () {
                    _this.timer = false
                }, 400)
            }
        }
    }
}
</script>


<style lang="less">
    .tabActive{
        border-bottom: 4px solid #FCDC3C;
    }
    .tabActiveApp{
        background: rgba(136,136,136,1);
    }
    .tabBar{
        display: flex;
        height: 60px;
        background:rgba(0,0,0,1);
        color:rgba(255,255,255,1);
        justify-content: space-around;
        .logoImg{
            display: flex;
            height: 100%;
            align-items: center;
            .logo{
                width: 38px;
                height: 38px;
            }
            .logoContent{
                height: 38px;
                padding-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .description{
                    color:rgba(136,136,136,1);
                }
            }
        }
        .tabList{
            display: flex;
            align-items: center;
            .menu{
                display: flex;
                flex-direction:column;
                height: 40px;
                justify-content: space-around;
                .menu-1{
                    height: 3px;
                    background: #FCDC3C;
                }
            }
            .tabList-1{
                display: flex;
                justify-content: space-between;
                width: 720px;
                .tabListItem{
                    line-height: 56px;
                    cursor: pointer;
                }
            }
        }
        .login{
            display: flex;
            align-items: center;
            .el-button{
                padding: 7px 16px;
            }
        }
    }
    .tabList-2{
        display: flex;
        flex-direction: column;
        background:rgba(0,0,0,1);
        color:#FCDC3C;
        .tabListItem{
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
        }
    }
</style>
