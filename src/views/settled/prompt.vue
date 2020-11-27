<template>
    <div>
        <el-card class="prompt-card" >
            <div slot="header" class="clearfix">
                <span>开店证照准备</span>
            </div>
            <div class="image-container">
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg" style="height:200px"></el-image>
                    <p>门脸照片 <span>(需拍出完整牌匾、门框，建议距离门店2米外拍摄)</span> </p>
                    
                </div>  
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606390961877&di=749be4c808be02ae8eff6d28b2324183&imgtype=0&src=http%3A%2F%2Fimg3.tbcdn.cn%2Ftfscom%2Fi1%2F1916563745%2FTB23ZfwnpXXXXcQXXXXXXXXXXXX_%2521%25211916563745.jpg" style="height:200px"></el-image>
                    <p>店内环境照片 <span>(需真实反映用餐环境，拍摄整体就餐区域，请勿局部拍摄桌椅)</span> </p>
                </div>   
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606468816327&di=3c58cf53ebc3474b2ef93864abf69930&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190224%2F58596c8c109a45098ba9b0cd6a29918d.jpeg" style="height:200px"></el-image>
                    <p>身份证正面照片 <span>(需清晰拍摄身份证信息拍摄完整，不可有遮盖物遮挡)</span> </p>
                </div>  
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606468816327&di=3c58cf53ebc3474b2ef93864abf69930&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190224%2F58596c8c109a45098ba9b0cd6a29918d.jpeg" style="height:200px"></el-image>
                    <p>身份证反面照片 <span>(需清晰拍摄身份证信息拍摄完整，不可有遮盖物遮挡)</span> </p>
                </div>  
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606468702012&di=d088822670ebc5492bdf82ed9d7b1ea9&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180419%2F3e786ccab26440cbbb2b5c60127ab160.jpeg" style="height:200px"></el-image>
                    <p>营业执照照片 <span>(需清晰拍摄身份证信息拍摄完整，不可有遮盖物遮挡)</span> </p>
                </div>   
                <div class="image-box">
                    <el-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606468702012&di=d088822670ebc5492bdf82ed9d7b1ea9&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180419%2F3e786ccab26440cbbb2b5c60127ab160.jpeg" style="height:200px"></el-image>
                    <p>经营许可证照片 <span>(需清晰拍摄身份证信息拍摄完整，不可有遮盖物遮挡)</span> </p>
                </div>  
            </div>
            <div class="submit-box">
                <el-row>
                    <el-checkbox v-model="aggressive">
                        <a href="javascript:;" @click="visible = !visible">我已阅读并同意《玉食餐饮入驻协议》</a>
                    </el-checkbox>
                </el-row>
                <el-row>
                    <el-button type="primary" @click="nextHandle">资料已准备好，进入下一步</el-button>
                </el-row>
            </div>
        </el-card>
        <el-dialog
            title="商家入驻协议"
            :visible.sync="visible"
            width="600px"
        >
            <div>
            
                <p>您好，如果您已经准备完成全部资料，并准备提交申请，在您提交申请前，请务必仔细阅读如下全部声明事项：</p>

                <p>1. 您确认并知悉，您的申请需依次经过线上与线下两次审核，请您在线上审核通过后，不要操作上线，等待线下业务经理到门店现场审核，经线下审核通过后方可操作上线。如其中任一项审核未通过或您提交了虚假资质或信息，则美团外卖有权对申请主体提供的资质和信息进行删除、屏蔽及操作下线等处理。</p>

                <p>2. 您承诺您申请主体为依据中国法律合法成立并有效存续的法人或其它商事主体，能够独立承担法律责任，并具备从事申请业务应具备的行政许可、合法授权或同意，及具有履行合作所需的一切权力、权利及能力。</p>

                <p>3. 您承诺所提供证照等资质和信息真实、合法、有效且不侵犯任何第三方合法权益。</p>

                <p>4. 您承诺提交审核的证照等资质和信息应符合国家法律、法规、规章的规定，申请主体未伪造、变造、冒用或盗用他人证照等资质，未侵犯他人拥有合法权益的信息等；如因申请主体提供的证照等资质或信息造成外卖用户及相关第三方损失或美团外卖损失或承担责任的，申请主体存在质量和安全问题，由此造成的美团外卖用户及相关第三方投诉、索赔、经济损失等相关后果均由申请主体予以承担。</p>

                <p>5. 您承诺提供的商号、商标、图片等均具有发布和使用的充分权利或授权，否则因申请主体原因造成美团外卖或第三方损失的，申请主体承担全部赔偿责任。如因申请主体原因造成美团外卖被第三方要求赔偿或发生纠纷、行政处罚、诉讼的，申请主体应向美团外卖全额赔偿损失，美团外卖亦有权对申请主体提供的的证照等资质和信息进行删除、屏蔽及操作下线等处理。</p>

                <p>对于以上声明，您如果存在异议，请停止申请或与【 10105557 】联系；如您继续填写并提交申请，则视为您理解上述声明，并确认遵守全部事项并在违反时承担责任。</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="visible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            aggressive:false,
            visible:false
        }
    },
    methods:{
        nextHandle(){
            if(this.aggressive){
                this.$router.push("store");
            } else {
                this.$alert('请先阅读并勾选商家入驻协议', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                        });
                    }
                });
            }
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
       font-size: 12px;
       color: #666;
    }
    .submit-box {
        margin-top: 20px;
    }
    .submit-box .el-row {
        margin-bottom: 10px;
    }
</style>