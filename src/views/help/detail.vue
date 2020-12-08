<template>
    <div class="help-detail">
        <div class="title">
            {{helpData.help_title}}
        </div>
        <div class="content" v-html="helpData.help_content">
        </div>
       
    </div>
</template>
<script>
import { helpDetail } from "@/api"
export default {
    data(){
        return {
            helpData:{}
        }
    },
    methods:{
       getHelpDetail(id){
           helpDetail({help_id:id}).then( res => {
               if(res.status === 200){
                   this.helpData = res.data
               }
           })
       }
    },
    created(){
       if(this.$route.params.id){
           this.getHelpDetail(this.$route.params.id)
       }
    }
}
</script>
<style scoped>
    .help-detail {
        padding-top:20px;
    }
    .help-detail .title {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }
    .help-detail .content {
        margin-top: 20px;
    }
</style>