import React from 'react'
import SummerTraining from './SummerTraining'
import InternshipInfo from './InternshipInfo'
import GetTraining from './GetTraining'
import TrainingServices from './TrainingServices'
import SummerTrInfo from './SummerTrInfo'
import WinterTrInfo from './WinterTrInfo'
import CorporateTrInfo from './CorporateTrInfo'
import ProjectTrInfo from './ProjectTrInfo'
import HiringPartners from '../../components/HiringPartners'


export default function AllInternship() {
  return (
    <>
    <div className="relative">
    <img src="./Images/ServiceHead.jpg" alt="Image is not showing" className="w-full h-auto" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl md:text-6xl font-bold">
            I n t e r n s h i p
       </h2>    
            <div className='text-white flex '>
            <span className='text-2xl font-normal text-center '>
                <a href="/" className="text-2xl font-normal pr-3">Home </a>
            </span>
            <h1 className='text-2xl '>&gt;</h1>
            <span className='text-2xl font-normal pl-3'><a href="/services"> Service&nbsp;</a></span>
            <h1 className='text-2xl '>&gt;</h1>
            <span className='text-2xl font-normal pl-3'> Internship</span>            
            </div>
    </div>
</div>
<InternshipInfo/>
<SummerTraining/>
<GetTraining/>
<TrainingServices/>
<SummerTrInfo/>
<WinterTrInfo/>
<CorporateTrInfo/>
<ProjectTrInfo/>
<HiringPartners/>
</>
  )
}