import React from 'react'
import EducationDataSource from '../files/Education.json'
import GroupComponent from './GroupComponent'

export default function Education() {
    return (
        <section id="education">
            <h3>Education</h3>
            <GroupComponent items={EducationDataSource.universities} groupName='Universities:' />
            <GroupComponent items={EducationDataSource.courses} groupName='Courses 2022:' />
        </section>
    )
}
