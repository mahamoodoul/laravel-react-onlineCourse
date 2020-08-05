<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\CourseFeatureModel;
use App\Model\CoursePlanModel;
use App\Model\PaymentGuideModel;

class HomeController extends Controller
{
    function getCourseFeatures(Request $request)
    {
        $result = CourseFeatureModel::all();
        return  $result;
    }
    function getCoursePlan(Request $request)
    {
        $result = CoursePlanModel::all();
        return  $result;
    }
    function getPaymentGuide(Request $request)
    {
        $result = PaymentGuideModel::all();
        return  $result;
    }
}
