import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/home'
import qrCode from '@/view/qrCode'
import qualityPage from '@/view/quality'
import eventMenu from '@/view/event/event'
import analysis from '@/view/event/analysis'
import winning from '@/view/event/winning'
import notice from '@/view/notice/notice'
import newsletter from '@/view/notice/newsletter'
import update from '@/view/update/update'
import project from '@/view/update/project'

import hospital from '@/view/target/hospital'
import norm from '@/view/target/norm'
import register from '@/view/target/register'
import treatment from '@/view/target/treatment'
import scheduling from '@/view/target/scheduling'
import endanger from '@/view/target/endanger'
import qualityControl from '@/view/qualitycontrol/quality_control'
import controlCenter from '@/view/qualitycontrol/control_center'
import feedback from '@/view/feedback/feedback'
import confluence from '@/view/feedback/confluence'
import standard from '@/view/standard/standard'
import stencil from '@/view/standard/stencil'
import training from '@/view/training/training'
import application from '@/view/application/application'
import managementTool from '@/view/managementtool/management_tool'
import pdca from '@/view/managementtool/pdca'
import fileMan from '@/view/fileman/fileman'
import security from '@/view/security/security'
import liaison from '@/view/liaison/liaison'
import qualifications from '@/view/qualifications/qualifications'

import check from '@/view/evaluation/check'
import checkNorm from '@/view/evaluation/check_norm'
import checkCrisis from '@/view/evaluation/check_crisis'
import checkQuality from '@/view/evaluation/check_quality'
import inspectionResult from '@/view/evaluation/inspection_result'
import medicalQuality from '@/view/evaluation/medical_quality'
import record from '@/view/evaluation/record'
import report from '@/view/evaluation/report'
import comment from '@/view/evaluation/comment'
import novReport from '@/view/evaluation/nov_report'

import medicalTechnology from '@/view/medicaltechnology/medical_technology'
import fileFile from '@/view/medicaltechnology/file_file'
import fileArchive from '@/view/medicaltechnology/file_archive'
import fileArchiveNew from '@/view/medicaltechnology/file_archive_new'

import qualificationApplay from '@/view/medicaltechnology/qualification_applay'
import qualificationExa from '@/view/medicaltechnology/qualification_exa'
import qualificationInquiry from '@/view/medicaltechnology/qualification_inquiry'
import qualificationManagement from '@/view/medicaltechnology/qualification_management'
import qualificationTechnology from '@/view/medicaltechnology/qualification_technology'
import bonusDetail from '@/view/medicaltechnology/bonus_detail'
import bonusGrant from '@/view/medicaltechnology/bonus_grant'
import bonusSign from '@/view/medicaltechnology/bonus_sign'
import bonusState from '@/view/medicaltechnology/bonus_state'
import hospitalDetail from '@/view/medicaltechnology/hospital_detail'
import hospitalList from '@/view/medicaltechnology/hospital_list'
import hospitalGather from '@/view/medicaltechnology/hospital_gather'
import catalogRoutine from '@/view/medicaltechnology/catalog_routine'
import catalogChange from '@/view/medicaltechnology/catalog_change'
import catalogSupervise from '@/view/medicaltechnology/catalog_supervise'
import catalogStop from '@/view/medicaltechnology/catalog_stop'
import medCheck from '@/view/medicaltechnology/med_check'
import medCheckApproval from '@/view/medicaltechnology/med_check_approval'
import medApproval from '@/view/medicaltechnology/med_approval'
import medSummary from '@/view/medicaltechnology/med_summary'
import medInspectionMatter from '@/view/medicaltechnology/med_inspection_matter'
import medInspectionSchool from '@/view/medicaltechnology/med_inspection_school'
import medApplay from '@/view/medicaltechnology/med_applay'
import approvalPending from '@/view/medicaltechnology/med_approval_pending'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { keepAlive: true }
    },
    {
      path: '/medicaltechnology/med_applay',
      name: 'medApplay',
      component: medApplay
    },
    {
      path: '/medicaltechnology/med_approval_pending',
      name: 'approvalPending',
      component: approvalPending
    },

    {
      path: '/medicaltechnology/med_check',
      name: 'medCheck',
      component: medCheck
    },
    {
      path: '/medicaltechnology/med_check_approval',
      name: 'medCheckApproval',
      component: medCheckApproval
    },
    {
      path: '/medicaltechnology/med_approval',
      name: 'medApproval',
      component: medApproval
    },
    {
      path: '/medicaltechnology/med_summary',
      name: 'medSummary',
      component: medSummary
    },
    {
      path: '/medicaltechnology/med_inspection_matter',
      name: 'medInspectionMatter',
      component: medInspectionMatter
    },
    {
      path: '/medicaltechnology/med_inspection_school',
      name: 'medInspectionSchool',
      component: medInspectionSchool
    },
    {
      path: '/medicaltechnology/catalog_routine',
      name: 'catalogRoutine',
      component: catalogRoutine
    },
    {
      path: '/medicaltechnology/catalog_change',
      name: 'catalogChange',
      component: catalogChange
    },
    {
      path: '/medicaltechnology/catalog_supervise',
      name: 'catalogSupervise',
      component: catalogSupervise
    },
    {
      path: '/medicaltechnology/catalog_stop',
      name: 'catalogStop',
      component: catalogStop
    },
    {
      path: '/medicaltechnology/hospital_detail',
      name: 'hospitalDetail',
      component: hospitalDetail
    },
    {
      path: '/medicaltechnology/hospital_list',
      name: 'hospitalList',
      component: hospitalList
    },
    {
      path: '/medicaltechnology/hospital_gather',
      name: 'hospitalGather',
      component: hospitalGather
    },
    {
      path: '/medicaltechnology/bonus_detail',
      name: 'bonusDetail',
      component: bonusDetail
    },
    {
      path: '/medicaltechnology/bonus_grant',
      name: 'bonusGrant',
      component: bonusGrant
    },
    {
      path: '/medicaltechnology/bonus_sign',
      name: 'bonusSign',
      component: bonusSign
    },
    {
      path: '/medicaltechnology/bonus_state',
      name: 'bonusState',
      component: bonusState
    },
    {
      path: '/medicaltechnology/qualification_applay',
      name: 'qualificationApplay',
      component: qualificationApplay
    },
    {
      path: '/medicaltechnology/qualification_exa',
      name: 'qualificationExa',
      component: qualificationExa
    },
    {
      path: '/medicaltechnology/qualification_inquiry',
      name: 'qualificationInquiry',
      component: qualificationInquiry
    },
    {
      path: '/medicaltechnology/qualification_management',
      name: 'qualificationManagement',
      component: qualificationManagement
    },
    {
      path: '/medicaltechnology/qualification_technology',
      name: 'qualificationTechnology',
      component: qualificationTechnology
    },
    {
      path: '/medicaltechnology/file_file',
      name: 'fileFile',
      component: fileFile
    },
    {
      path: '/medicaltechnology/file_archive',
      name: 'fileArchive',
      component: fileArchive
    },
    {
      path: '/medicaltechnology/file_archive_new',
      name: 'fileArchiveNew',
      component: fileArchiveNew
    },
    {
      path: '/medicaltechnology/medicaltechnology',
      name: 'medicalTechnology',
      component: medicalTechnology
    },
    {
      path: '/qrCode',
      name: 'qrCode',
      component: qrCode
    },
    {
      path: '/evaluation/report',
      name: 'report',
      component: report
    },
    {
      path: '/evaluation/record',
      name: 'record',
      component: record
    },
    {
      path: '/evaluation/medicalquality',
      name: 'medicalQuality',
      component: medicalQuality
    },
    {
      path: '/evaluation/check',
      name: 'check',
      component: check
    },
    {
      path: '/evaluation/check_norm',
      name: 'checkNorm',
      component: checkNorm
    },
    {
      path: '/evaluation/check_crisis',
      name: 'checkCrisis',
      component: checkCrisis
    },
    {
      path: '/evaluation/check_quality',
      name: 'checkQuality',
      component: checkQuality
    },
    {
      path: '/evaluation/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/evaluation/inspectionresult',
      name: 'inspectionResult',
      component: inspectionResult
    },
    {
      path: '/evaluation/novreport',
      name: 'novReport',
      component: novReport
    },
    {
      path: '/fileman/fileman',
      name: 'fileman',
      component: fileMan
    },
    {
      path: '/security/security',
      name: 'security',
      component: security
    },
    {
      path: '/liaison/liaison',
      name: 'liaison',
      component: liaison
    },
    {
      path: '/qualifications/qualifications',
      name: 'qualifications',
      component: qualifications
    },
    {
      path: '/training/training',
      name: 'training',
      component: training
    },
    {
      path: '/application/application',
      name: 'application',
      component: application
    },
    {
      path: '/managementtool/managementtool',
      name: 'managementtool',
      component: managementTool
    },
    {
      path: '/managementtool/pdca',
      name: 'pdca',
      component: pdca
    },
    {
      path: '/standard/standard',
      name: 'standard',
      component: standard
    },
    {
      path: '/standard/stencil',
      name: 'stencil',
      component: stencil
    },
    {
      path: '/feedback/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/feedback/confluence',
      name: 'confluence',
      component: confluence
    },
    {
      path: '/qualitycontrol/qualitycontrol',
      name: 'qualityControl',
      component: qualityControl
    },
    {
      path: '/qualitycontrol/controlcenter',
      name: 'controlCenter',
      component: controlCenter
    },
    {
      path: '/target/scheduling',
      name: 'scheduling',
      component: scheduling
    },
    {
      path: '/target/endanger',
      name: 'endanger',
      component: endanger
    },
    {
      path: '/target/hospital',
      name: 'hospital',
      component: hospital
    },
    {
      path: '/target/norm',
      name: 'norm',
      component: norm
    },
    {
      path: '/target/treatment',
      name: 'treatment',
      component: treatment
    },
    {
      path: '/target/register',
      name: 'register',
      component: register
    },
    {
      path: '/qualityPage',
      name: 'qualityPage',
      component: qualityPage,
      meta: { keepAlive: true }
    },
    {
      path: '/event/event',
      name: 'event/event',
      component: eventMenu
    },
    {
      path: '/event/analysis',
      name: 'analysis',
      component: analysis
    },
    {
      path: '/event/winning',
      name: 'winning',
      component: winning
    },
    {
      path: '/notice/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/notice/newsletter',
      name: 'newsletter',
      component: newsletter
    },
    {
      path: '/update/update',
      name: 'update',
      component: update
    },
    {
      path: '/update/project',
      name: 'project',
      component: project
    }
  ]
})
