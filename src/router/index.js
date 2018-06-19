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

import operationManagement from '@/view/operationmanagement/operation-management'
import catalogOperation from '@/view/operationmanagement/catalog-operation'
import catalogJournal from '@/view/operationmanagement/catalog-journal'
import catalogQua from '@/view/operationmanagement/catalog-qua'
import applyQua from '@/view/operationmanagement/apply-qua'
import applyExa from '@/view/operationmanagement/apply-exa'
import applyApproval from '@/view/operationmanagement/apply-approval'
import applyScore from '@/view/operationmanagement/apply-score'
import applyGroup from '@/view/operationmanagement/apply-group'
import applyQuality from '@/view/operationmanagement/apply-quality'
import applyPublicity from '@/view/operationmanagement/apply-publicity'
import applyArchives from '@/view/operationmanagement/apply-archives'
import applyQuery from '@/view/operationmanagement/apply-query'
import applySummary from '@/view/operationmanagement/apply-summary'
import registerFor from '@/view/operationmanagement/register-for'
import registerSup from '@/view/operationmanagement/register-sup'
import registerApply from '@/view/operationmanagement/register-apply'
import registerMajor from '@/view/operationmanagement/register-major'
import registerVoid from '@/view/operationmanagement/register-void'
import countCur from '@/view/operationmanagement/count-cur'
import countHistory from '@/view/operationmanagement/count-history'
import allFull from '@/view/operationmanagement/all-full'
import allHospital from '@/view/operationmanagement/all-hospital'
import allLevel from '@/view/operationmanagement/all-level'
import allPro from '@/view/operationmanagement/all-pro'
import allSpecial from '@/view/operationmanagement/all-special'
import allCla from '@/view/operationmanagement/all-cla'
import allFinish from '@/view/operationmanagement/all-finish'
import allCost from '@/view/operationmanagement/all-cost'
import allDetail from '@/view/operationmanagement/all-detail'
import allMom from '@/view/operationmanagement/all-mom'
import partSpecial from '@/view/operationmanagement/part-special'
import partAcc from '@/view/operationmanagement/part-acc'
import partLevel from '@/view/operationmanagement/part-level'
import partTrend from '@/view/operationmanagement/part-trend'
import partNum from '@/view/operationmanagement/part-num'
import adverseEvent from '@/view/adverse-event/adverse-event'
import reportEvent from '@/view/adverse-event/report-event'
import pendingApproval from '@/view/adverse-event/pending-approval'
import chiefEnquiry from '@/view/adverse-event/chief-enquiry'
import correctiveFeedback from '@/view/adverse-event/corrective-feedback'
import summaryTable from '@/view/adverse-event/summary-table'
import statisticalChart from '@/view/adverse-event/statistical-chart'
import personnelChart from '@/view/capacity-assessment/personnel-chart'
import workFlow from '@/view/capacity-assessment/work-flow'
import userRights1 from '@/view/capacity-assessment/user-rights'
import capacityAssessment from '@/view/capacity-assessment/capacity-assessment'
import capacityEvaluation from '@/view/capacity-assessment/capacity-evaluation'

import indexManagement from '@/view/index-management/index-management'
import indexSbManagement from '@/view/index-management/management'
import indexReport from '@/view/index-management/report'
import indexAnalysis from '@/view/index-management/analysis'
import indexDepartment from '@/view/index-management/department'
import indexTarget from '@/view/index-management/target'
import indexCount from '@/view/index-management/count'
import indexSearch from '@/view/index-management/search'

import examinePage from '@/view/examine/examine'
import eaxAbility from '@/view/examine/ability'
import eaxComprehensive from '@/view/examine/comprehensive'
import eaxDispute from '@/view/examine/dispute'
import eaxQuality from '@/view/examine/quality'

import treatmentPage from '@/view/treatment/treatment'
import treatmentManage from '@/view/treatment/manage'
import verifyPage from '@/view/treatment/verify'

import solutionPage from '@/view/solution'
import carePage from '@/view/care/care'
import clinicalPage from '@/view/clinical/clinical'
import diagnosisPage from '@/view/diagnosis/diagnosis'
import recordPage from '@/view/record/record'
import automaticGrading from '@/view/diagnosis/automatic-grading'
import objectiveIndicators from '@/view/diagnosis/objective-indicators'
import automaticCalculation from '@/view/diagnosis/automatic-calculation'
import recordQuery from '@/view/diagnosis/record-query'
import modifyLogquery from '@/view/diagnosis/modify-logquery'
import medicalInformation from '@/view/record/medical-information'
import shiftChange from '@/view/record/shift-change'
import medicalRecord from '@/view/record/medical-record'
import rescueTeam from '@/view/clinical/rescue-team'
import immediateExecution from '@/view/clinical/immediate-execution'
import threeStep from '@/view/clinical/three-step'
import tenStep from '@/view/clinical/ten-step'
import emergencyClinic from '@/view/clinical/emergency-clinic'
import nurseManagement from '@/view/care/nurse-management'
import doctorPage from '@/view/care/doctor'
import nursingForm from '@/view/care/nursing-form'
import bedSetting from '@/view/care/bed-setting'
import historicalInquiry from '@/view/care/historical-inquiry'

import cockpitPage from '@/view/cockpit/cockpit'
import operationalPerformance from '@/view/cockpit/analysis'
import IntegratedOperation from '@/view/cockpit/integrated-operation'
import Income from '@/view/cockpit/income-work'

import PerformanceGoals from '@/view/cockpit/performance-goals'
import PipelineReport from '@/view/cockpit/pipeline-report'
import MonthlyReport from '@/view/cockpit/monthly-report'
import DayReport from '@/view/cockpit/day-report'
import OutpatientDepartment from '@/view/cockpit/outpatient-department'
import HosptialDynamics from '@/view/cockpit/hosptial-dynamics'
import AreaDynamics from '@/view/cockpit/area-dynamics'
import DrugConsumables from '@/view/cockpit/Drug-consumables'
import CostVariation from '@/view/cockpit/cost-variation'
import SurgicalAnalysic from '@/view/cockpit/surgical-analysic'
import PerformanceManagement from '@/view/cockpit/performance-management'
import  MedicalInquiry from '@/view/cockpit/medical-inquiry'
import  ClinicalPathway from '@/view/cockpit/clinical-pathway'
import  GradeScore from '@/view/cockpit/grade-score'
import  MedicalOverview from '@/view/cockpit/medical-overview'
import  MedicalMonthly from '@/view/cockpit/medical-monthly'

import departmentReport from '@/view/cockpit/department-report'
import emergencyDepartment from '@/view/cockpit/emergency-department'
import Hospitalization from '@/view/cockpit/hospitalization'
import Operation from '@/view/cockpit/operation'
import medicalInsurance from '@/view/cockpit/medical-insurance'
import Pharmacy from '@/view/cockpit/pharmacy'
import medicalImaging from '@/view/cockpit/medical-imaging'
import Ultrasound from '@/view/cockpit/ultrasound'
import endoscopeRoom from '@/view/cockpit/endoscope-room'
import physicalExamination from '@/view/cockpit/physical-examination'
import employeeOverview from '@/view/cockpit/employee-overview'
import sectionOverview from '@/view/cockpit/section-overview'
import personnelChanges from '@/view/cockpit/personnel-changes'
import functionalDepartments from '@/view/cockpit/functional-departments'
import clinicalDepartment from '@/view/cockpit/clinical-department'
import medicalTechnologys from '@/view/cockpit/medical-technologys'


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
      path: '/cockpit/medical-technologys',
      name: 'medicalTechnologys',
      component: medicalTechnologys,
    },
    {
      path: '/cockpit/clinical-department',
      name: 'clinicalDepartment',
      component: clinicalDepartment,
    },
    {
      path: '/cockpit/functional-departments',
      name: 'functionalDepartments',
      component: functionalDepartments,
    },
    {
      path: '/cockpit/personnel-changes',
      name: 'personnelChanges',
      component: personnelChanges,
    },
    {
      path: '/cockpit/section-overview',
      name: 'sectionOverview',
      component: sectionOverview,
    },
    {
      path: '/cockpit/employee-overview',
      name: 'employeeOverview',
      component: employeeOverview,
    },
    {
      path: '/cockpit/physical-examination',
      name: 'physicalExamination',
      component: physicalExamination,
    },
    {
      path: '/cockpit/endoscope-room',
      name: 'endoscopeRoom',
      component: endoscopeRoom,
    },
    {
      path: '/cockpit/ultrasound',
      name: 'Ultrasound',
      component: Ultrasound,
    },
    {
      path: '/cockpit/medical-imaging',
      name: 'medicalImaging',
      component: medicalImaging,
    },
    {
      path: '/cockpit/pharmacy',
      name: 'Pharmacy',
      component: Pharmacy,
    },
    {
      path: '/cockpit/medical-insurance',
      name: 'medicalInsurance',
      component: medicalInsurance,
    },
    {
      path: '/cockpit/operation',
      name: 'Operation',
      component: Operation,
    },
    {
      path: '/cockpit/hospitalization',
      name: 'Hospitalization',
      component: Hospitalization,
    },
    {
      path: '/cockpit/emergency-department',
      name: 'emergencyDepartment',
      component: emergencyDepartment,
    },
    {
      path: '/cockpit/department-report',
      name: 'departmentReport',
      component: departmentReport,
    },
    {
      path: '/cockpit/medical-monthly',
      name: 'MedicalMonthly',
      component: MedicalMonthly,
    },

    {
      path: '/cockpit/medical-overview',
      name: 'MedicalOverview',
      component: MedicalOverview,
    },

    {
      path: '/cockpit/grade-score',
      name: 'GradeScore',
      component: GradeScore,
    },

    {
      path: '/cockpit/clinical-pathway',
      name: 'ClinicalPathway',
      component: ClinicalPathway,
    },

    {
      path: '/cockpit/medical-inquiry',
      name: 'MedicalInquiry',
      component: MedicalInquiry,
    },

    {
      path: '/cockpit/performance-management',
      name: 'PerformanceManagement',
      component: PerformanceManagement,
    },

    {
      path: '/cockpit/surgical-analysic',
      name: 'SurgicalAnalysic',
      component: SurgicalAnalysic,
    },

    {
      path: '/cockpit/cost-variation',
      name: 'CostVariation',
      component: CostVariation,
    },

    {
      path: '/cockpit/Drug-consumables',
      name: 'DrugConsumables',
      component: DrugConsumables,
    },

    {
      path: '/cockpit/area-dynamics',
      name: 'AreaDynamics',
      component: AreaDynamics,
    },

    {
      path: '/cockpit/hosptial-dynamics',
      name: 'HosptialDynamics',
      component: HosptialDynamics,
    },

    {
      path: '/cockpit/operation',
      name: 'Operation',
      component: Operation,
    },

    {
      path: '/cockpit/hospitalization',
      name: 'Hospitalization',
      component: Hospitalization,
    },

    {
      path: '/cockpit/outpatient-department',
      name: 'OutpatientDepartment',
      component: OutpatientDepartment,
    },

    {
      path: '/cockpit/monthly-report',
      name: 'MonthlyReport',
      component: MonthlyReport,
    },

    {
      path: '/cockpit/day-report',
      name: 'DayReport',
      component: DayReport,
    },

    {
      path: '/cockpit/pipeline-report',
      name: 'PipelineReport',
      component: PipelineReport,
    },

    {
      path: '/cockpit/performance-goals',
      name: 'PerformanceGoals',
      component: PerformanceGoals,
    },

    {
      path: '/cockpit/income-work',
      name: 'Income',
      component: Income,
    },

    {
      path: '/cockpit/integrated-operation',
      name: 'IntegratedOperation',
      component: IntegratedOperation,
    },

    {
      path: '/cockpit/analysis',
      name: 'operationalPerformance',
      component: operationalPerformance,
    },

    {
      path: '/cockpit/cockpit',
      name: 'cockpitPage',
      component: cockpitPage,
    },
    {
      path: '/care/historical-inquiry',
      name: 'historicalInquiry',
      component: historicalInquiry
    },
    {
      path: '/care/bed-setting',
      name: 'bedSetting',
      component: bedSetting
    },
    {
      path: '/care/nursing-form',
      name: 'nursingForm',
      component: nursingForm
    },
    {
      path: '/care/doctor',
      name: 'doctorPage',
      component: doctorPage
    },
    {
      path: '/care/nurse-management',
      name: 'nurseManagement',
      component: nurseManagement
    },
    {
      path: '/clinical/emergency-clinic',
      name: 'emergencyClinic',
      component: emergencyClinic
    },
    {
      path: '/clinical/ten-step',
      name: 'tenStep',
      component: tenStep
    },
    {
      path: '/clinical/three-step',
      name: 'threeStep',
      component: threeStep
    },
    {
      path: '/clinical/immediate-execution',
      name: 'immediateExecution',
      component: immediateExecution
    },
    {
      path: '/clinical/rescue-team',
      name: 'rescueTeam',
      component: rescueTeam
    },
    {
      path: '/record/medical-record',
      name: 'medicalRecord',
      component: medicalRecord
    },
    {
      path: '/record/shift-change',
      name: 'shiftChange',
      component: shiftChange
    },
    {
      path: '/record/medical-information',
      name: 'medicalInformation',
      component: medicalInformation
    },
    {
      path: '/diagnosis/modify-logquery',
      name: 'modifyLogquery',
      component: modifyLogquery
    },
    {
      path: '/diagnosis/record-query',
      name: 'recordQuery',
      component: recordQuery
    },
    {
      path: '/diagnosis/automatic-calculation',
      name: 'automaticCalculation',
      component: automaticCalculation
    },
    {
      path: '/diagnosis/objective-indicators',
      name: 'objectiveIndicators',
      component: objectiveIndicators
    },
    {
      path: '/diagnosis/automatic-grading',
      name: 'automaticGrading',
      component: automaticGrading
    },
    {
      path: '/care/care',
      name: 'carePage',
      component: carePage
    },
    {
      path: '/clinical/clinical',
      name: 'clinicalPage',
      component: clinicalPage
    },
    {
      path: '/diagnosis/diagnosis',
      name: 'diagnosisPage',
      component: diagnosisPage
    },
    {
      path: '/record/record',
      name: 'recordPage',
      component: recordPage
    },
    {
      path: '/solution',
      name: 'solutionPage',
      component: solutionPage
    },
    {
      path: '/treatment/manage',
      name: 'treatmentManage',
      component: treatmentManage
    },
    {
      path: '/treatment/verify',
      name: 'verifyPage',
      component: verifyPage
    },
    {
      path: '/treatment/treatment',
      name: 'treatmentPage',
      component: treatmentPage
    },
    {
      path: '/examine/comprehensive',
      name: 'eaxComprehensive',
      component: eaxComprehensive
    },
    {
      path: '/examine/ability',
      name: 'eaxAbility',
      component: eaxAbility
    },
    {
      path: '/examine/quality',
      name: 'eaxQuality',
      component: eaxQuality
    },
    {
      path: '/examine/dispute',
      name: 'eaxDispute',
      component: eaxDispute
    },
    {
      path: '/examine/examine',
      name: 'examinePage',
      component: examinePage
    },
    {
      path: '/capacity-assessment/capacity-assessment',
      name: 'capacityAssessment',
      component: capacityAssessment
    },
    {
      path: '/capacity-assessment/work-flow',
      name: 'workFlow',
      component: workFlow
    },
    {
      path: '/capacity-assessment/user-rights',
      name: 'userRights1',
      component: userRights1
    },
    {
      path: '/capacity-assessment/personnel-chart',
      name: 'personnelChart',
      component: personnelChart
    },
    {
      path: '/capacity-assessment/capacity-evaluation',
      name: 'capacityEvaluation',
      component: capacityEvaluation
    },
    {
      path: '/index-management/search',
      name: 'indexSearch',
      component: indexSearch
    },
    {
      path: '/index-management/count',
      name: 'indexCount',
      component: indexCount
    },
    {
      path: '/index-management/target',
      name: 'indexTarget',
      component: indexTarget
    },
    {
      path: '/index-management/department',
      name: 'indexDepartment',
      component: indexDepartment
    },
    {
      path: '/index-management/analysis',
      name: 'indexAnalysis',
      component: indexAnalysis
    },
    {
      path: '/index-management/report',
      name: 'indexReport',
      component: indexReport
    },
    {
      path: '/index-management/management',
      name: 'indexSbManagement',
      component: indexSbManagement
    },
    {
      path: '/adverse-event/statistical-chart',
      name: 'statisticalChart',
      component: statisticalChart
    },
    {
      path: '/adverse-event/summary-table',
      name: 'summaryTable',
      component: summaryTable
    },
    {
      path: '/adverse-event/corrective-feedback',
      name: 'correctiveFeedback',
      component: correctiveFeedback
    },
    {
      path: '/adverse-event/report-event',
      name: 'reportEvent',
      component: reportEvent
    },
    {
      path: '/adverse-event/chief-enquiry',
      name: 'chiefEnquiry',
      component: chiefEnquiry
    },
    {
      path: '/adverse-event/pending-approval',
      name: 'pendingApproval',
      component: pendingApproval
    },
    {
      path: '/adverse-event/adverse-event',
      name: 'adverseEvent',
      component: adverseEvent
    },
    {
      path: '/index-management/index-management',
      name: 'indexManagement',
      component: indexManagement
    },
    {
      path: '/operationmanagement/part-special',
      name: 'partSpecial',
      component: partSpecial
    },
    {
      path: '/operationmanagement/part-acc',
      name: 'partAcc',
      component: partAcc
    },
    {
      path: '/operationmanagement/part-level',
      name: 'partLevel',
      component: partLevel
    },
    {
      path: '/operationmanagement/part-trend',
      name: 'partTrend',
      component: partTrend
    },
    {
      path: '/operationmanagement/part-num',
      name: 'partNum',
      component: partNum
    },
    {
      path: '/operationmanagement/all-cla',
      name: 'allCla',
      component: allCla
    },
    {
      path: '/operationmanagement/all-finish',
      name: 'allFinish',
      component: allFinish
    },
    {
      path: '/operationmanagement/all-cost',
      name: 'allCost',
      component: allCost
    },
    {
      path: '/operationmanagement/all-detail',
      name: 'allDetail',
      component: allDetail
    },
    {
      path: '/operationmanagement/all-mom',
      name: 'allMom',
      component: allMom
    },
    {
      path: '/operationmanagement/all-full',
      name: 'allFull',
      component: allFull
    },
    {
      path: '/operationmanagement/all-hospital',
      name: 'allHospital',
      component: allHospital
    },
    {
      path: '/operationmanagement/all-level',
      name: 'allLevel',
      component: allLevel
    },
    {
      path: '/operationmanagement/all-pro',
      name: 'allPro',
      component: allPro
    },
    {
      path: '/operationmanagement/all-special',
      name: 'allSpecial',
      component: allSpecial
    },

    {
      path: '/operationmanagement/count-cur',
      name: 'countCur',
      component: countCur
    },
    {
      path: '/operationmanagement/count-history',
      name: 'countHistory',
      component: countHistory
    },
    {
      path: '/operationmanagement/register-for',
      name: 'registerFor',
      component: registerFor
    },
    {
      path: '/operationmanagement/register-sup',
      name: 'registerSup ',
      component: registerSup
    },
    {
      path: '/operationmanagement/register-apply',
      name: 'registerApply',
      component: registerApply
    },
    {
      path: '/operationmanagement/register-major',
      name: 'registerMajor',
      component: registerMajor
    },
    {
      path: '/operationmanagement/register-void',
      name: 'registerVoid',
      component: registerVoid
    },
    {
      path: '/operationmanagement/apply-qua',
      name: 'applyQua',
      component: applyQua
    },
    {
      path: '/operationmanagement/apply-exa',
      name: 'applyExa',
      component: applyExa
    },
    {
      path: '/operationmanagement/apply-approval',
      name: 'applyApproval',
      component: applyApproval
    },
    {
      path: '/operationmanagement/apply-score',
      name: 'applyScore',
      component: applyScore
    },
    {
      path: '/operationmanagement/apply-group',
      name: 'applyGroup',
      component: applyGroup
    },
    {
      path: '/operationmanagement/apply-quality',
      name: 'applyQuality',
      component: applyQuality
    },
    {
      path: '/operationmanagement/apply-publicity',
      name: 'applyPublicity ',
      component: applyPublicity
    },
    {
      path: '/operationmanagement/apply-archives',
      name: 'applyArchives',
      component: applyArchives
    },
    {
      path: '/operationmanagement/apply-query',
      name: 'applyQuery',
      component: applyQuery
    },
    {
      path: '/operationmanagement/apply-summary',
      name: 'applySummary',
      component: applySummary
    },
    {
      path: '/operationmanagement/catalog-operation',
      name: 'catalogOperation',
      component: catalogOperation
    },
    {
      path: '/operationmanagement/catalog-journal',
      name: 'catalogJournal',
      component: catalogJournal
    },
    {
      path: '/operationmanagement/catalog-qua',
      name: 'catalogQua',
      component: catalogQua
    },
    {
      path: '/operationmanagement/operation-management',
      name: 'operationManagement',
      component: operationManagement
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
