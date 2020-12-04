<template>
    <el-container>
        <el-header>
            <div class="header-left">
                <div class="site-logo">
                   <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3527002411,2665733125&fm=26&gp=0.jpg" alt="logo">
                </div>
                <div class="vertical-line"></div>
                <h3>玉食餐饮</h3>
                <div class="vertical-line"></div>
                <h4>帮助中心</h4>
            </div>
            <div class="header-right">
                <el-menu mode="horizontal">
                    <el-menu-item index="1">
                        <router-link to="/settled"><el-button type="primary" size="mini">
                            商家入驻</el-button></router-link>
                    </el-menu-item>
                    <el-submenu index="2" popper-class="site-nav">
                        <template slot="title">{{profile.userName}}</template>
                        <el-menu-item index="2-1">退出登陆</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </el-header>
        <el-main class="flex-main">
            <category></category>
            <div class="main-content">
                <div class="search-container">
                    <div class="search-form">
                        <el-input v-model="input" placeholder="请输入内容" class="width-600">
                            <template slot="append"><el-button type="primary">搜索</el-button></template>
                        </el-input>
                    </div>
                    <div class="search-lists"></div>

                    <el-divider></el-divider>
                    <div class="help-container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </el-main>
        <el-footer style="height:auto">
            <div class="footer-container">
                <div class="link-row">
                    <h4>帮助中心</h4>
                    <div class="qrcode">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2194710875,1331572660&fm=26&gp=0.jpg" alt="">
                    </div>
                </div>
                <div class="link-row">
                    <h4>服务协议</h4>
                    <ul>
                        <li>入驻协议</li>
                        <li>加盟协议</li>
                    </ul>
                </div>
                <div class="link-row">
                    <h4>其他问题</h4>
                    <ul>
                        <li>常见问题</li>
                        <li>自制相关</li>
                    </ul>
                </div>
                <div class="link-row">
                    <h4>其他问题</h4>
                    <ul>
                        <li>常见问题常见问题</li>
                        <li>自制相关常见问题常见问题</li>
                    </ul>
                </div>
                <div class="link-row">
                    <h4>其他问题</h4>
                    <ul>
                        <li>常见问题</li>
                        <li>自制相关</li>
                    </ul>
                </div>
            </div>
        </el-footer>
    </el-container>
</template>
<script>
import category from '@/views/help/cate'
import lists from '@/views/help/lists'

export default {
    components:{
        'category':category,
    },
    computed: {
        profile () {
            return this.$store.state.profile
        }
    },
    data(){
        return {
            input:''
        }
    },
    methods:{
    
    },
    created(){
        console.log( this.$store.state );
    }
}
</script>
<style scoped>
.width-600 {
    width: 600px;
}
.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    background: #fff;
    border-bottom: solid 1px #e6e6e6;
}
.header-left {
    display: flex;
    align-items: center;
}
.header-left .site-logo {
    width: 50px;
}
.header-left .site-logo img {
    width: 100%;
}
.header-left .vertical-line {
    width: 0;
    height: 20px;
    margin: 0 10px;
    border-right: 1px solid #dfdfdf;
}
.header-left h3,
.header-left h4 {
    font-weight: 400;
}
.el-main {
    width: 1200px;
    margin: 10px auto;
    padding: 0;
    text-align: left;
    min-height: calc(100vh - 337px);
}
.el-footer {
    height: 500px;
    background: rgba(0,0,0,.7);
    color: #fff;
    padding: 50px 0;
}
.flex-main {
    display: flex;
    justify-content: space-between;
}
.main-content {
    background: #fff;
    padding: 20px 50px;
    width: 840px;
    border: solid 1px #e6e6e6;
}
.footer-container {
    width: 900px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
.footer-container .qrcode {
    width: 100px;
}
.footer-container .qrcode img {
    width: 100%;
}
</style>>
   