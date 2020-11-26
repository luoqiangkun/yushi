<template>
    <el-card class="prompt-card" >
        <div slot="header" class="clearfix">
            <span>开店证照准备</span>
        </div>
        <div class="image-container">
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>  
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>   
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>  
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>  
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>   
            <div class="image-box">
                <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg"></el-image>
                <span>门帘照片</span>
            </div>  
        </div>
        <div class="submit-box">
            <el-row>
                <el-checkbox v-model="checked">我已阅读并同意《玉食餐饮入驻协议》</el-checkbox>
            </el-row>
            <el-row>
                <el-button type="primary" @click="nextHandle">资料已准备好，进入下一步</el-button>
            </el-row>
        </div>
    </el-card>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        nextHandle(){
            this.$router.push("store");
        }
    }
}
</script>
<style scoped>
    .prompt-card {
        width: 800px;
        margin: 0 auto;
    }
    .prompt-card .image-container {
        display: flex;
        flex-wrap: wrap;
    }
    .image-container .image-box {
        width: 33.33%;
        padding: 5px;
        box-sizing: border-box;
        position: relative;
    }
    .image-container .image-box img {
        width: 100%;
    }
    .image-container .image-box span {
        color: #fff;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 15px;
    }
    .submit-box {
        margin-top: 20px;
    }
    .submit-box .el-row {
        margin-bottom: 10px;
    }
</style>