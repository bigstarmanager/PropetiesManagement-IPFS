import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/components/views/mainpages/Welcome.vue'
import FileUpload from '@/components/views/common/FileUpload.vue'
import UploadDocumentPage1 from '@/components/views/mainpages/UploadDocumentPage1.vue'
import UploadDocumentPage2 from '@/components/views/mainpages/UploadDocumentPage2.vue'
import ConfirmPage from '@/components/views/mainpages/ConfirmPage.vue'
import RegisteProperty from '@/components/views/mainpages/RegisteProperty.vue'
import CheckingPage from '@/components/views/mainpages/CheckingPage.vue'
import FormData from '@/components/views/mainpages/FormData.vue'


export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/registeproperty',
      name: 'registeproperty',
      component: RegisteProperty
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/fileupload',
      name: 'fileupload',
      component: FileUpload,
    },
    {
      path: '/uploaddocumentpage1',
      name: 'uploaddocumentpage1',
      component: UploadDocumentPage1,
    },
    {
      path: '/uploaddocumentpage2',
      name: 'uploaddocumentpage2',
      component: UploadDocumentPage2,
    },
    {
      path: '/checkingpage',
      name: 'checkingpage',
      component: CheckingPage,
    },
    {
      path: '/confirmpage',
      name: 'confirmpage',
      component: ConfirmPage,
    },
    {
      path: '/formdata',
      name: 'formdata',
      component: FormData,
    }
    
  ]
})