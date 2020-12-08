<template>
    <div class="result-container">
         <el-steps :active="3" simple>
            <el-step title="店铺信息" icon="el-icon-s-shop"></el-step>
            <el-step title="资质信息" icon="el-icon-c-scale-to-original"></el-step>
            <el-step title="法人信息" icon="el-icon-s-custom"></el-step>
            <el-step title="等待审核" icon="el-icon-coordinate"></el-step>
        </el-steps>

        <div class="alert-box" style="margin-top:20px">
          

            <el-alert
                title="等待平台审核"
                type="info"
                description="你的商家入驻申请已提交，请耐心等待平台审核，预计会在2个工作日内得到审核结果"
                show-icon
                :center="center"
                :closable="false">
            </el-alert>

        </div>
     
        <el-card shadow="never">
            <p>1、审核结果会在1到2个工作日以短信的方式发送到你的手机，请注意查看</p>

            <p>2、如果审核未通过，请参照审核失败原因进行修改，之后重新提交</p>


        </el-card>
    </div>
    
    
</template>
<script>
export default {
    data(){
        return {
          tableData: [{
            date: '2016-05-02',
            name: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎'
          }, {
            date: '2016-05-01',
            name: '王小虎'
          }, {
            date: '2016-05-03',
            name: '上海市普陀区金沙江路 1516 弄'
          }],
          center:false
        }
    },
    methods:{
        
    },
    created(){
        
    }
}
</script>
<style scoped>
    .result-container {
        text-align: left;
    }
    .el-card {
        color: #666;
    }
    .el-alert {
        padding: 20px 16px;
    }
    .el-alert__content {
        text-align: left;
    }
    .el-alert__title {
        font-size: 16px;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
</style>