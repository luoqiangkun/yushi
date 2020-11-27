<template>
   <div class="main-content">
        <el-steps :active="3" simple>
            <el-step title="店铺信息" icon="el-icon-s-shop"></el-step>
            <el-step title="资质信息" icon="el-icon-c-scale-to-original"></el-step>
            <el-step title="法人信息" icon="el-icon-s-custom"></el-step>
        </el-steps>
        <el-form ref="form" :model="form" label-width="130px" label-position="left">
            <el-form-item label="法人名称">
                <el-input class="width-400"></el-input>
            </el-form-item>
             <el-form-item label="法人联系方式">
                <el-input class="width-400"></el-input>
            </el-form-item>
             <el-form-item label="法人身份正号">
                <el-input class="width-400"></el-input>
            </el-form-item>
            <el-form-item label="手持身份证正面照">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                >
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">需拍出完整牌匾、门框（建议正对店铺2米处拍摄</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="手持身份证反面照">
                <el-upload
                    class="test"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                >
                <div slot="tip" class="el-upload__tip">需拍出完整牌匾、门框（建议正对店铺2米处拍摄</div>
                <i class="el-icon-plus"></i>
                
                </el-upload>
            </el-form-item>
           
            <el-divider></el-divider>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
        </el-form>
   </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        onSubmit(){
            this.$router.push("owner");
        }
    }
}
</script>
<style scoped>
.width-400 {
    width: 400px;
}
.main-content {
    padding: 0 50px;
    text-align: left;
}
.main-content .el-alert {
    padding: 14px 16px;
    margin-bottom: 20px;
}
.main-content .el-steps {
    margin-bottom: 20px;
}

</style>