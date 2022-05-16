// Render Prop
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import CityService from '../../../services/cityService';
import JobAdvertisementService from '../../../services/jobAdvertisementService';
import JobPositionService from '../../../services/jobPositionService';
import WorkingTimeService from '../../../services/workingTimeService';
import WorkingTypeService from '../../../services/workingTypeService';

export default function AddJobAdvertisement() {
    const [jobPositions, setJobPositions] = useState([]);
    const [cities, setCities] = useState([]);
    const [workingTypes, setWorkingTypes] = useState([]);
    const [workingTimes, setWorkingTimes] = useState([]);

    let jobAdvertisementService = new JobAdvertisementService();
    
    useEffect(()=>{
        let jobPositionService = new JobPositionService();
        let cityService = new CityService();
        let workingTypeService = new WorkingTypeService();
        let workingTimeService = new WorkingTimeService();

        jobPositionService.getAll().then(response=>setJobPositions(response.data.data))
        cityService.getAll().then(response=>setCities(response.data.data))
        workingTypeService.getAll().then(response=>setWorkingTypes(response.data.data))
        workingTimeService.getAll().then(response=>setWorkingTimes(response.data.data))
    },[])

    return (
        <div>
            <Formik
                initialValues={{employer:{id:16}}}//geçici değer verildi
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        jobAdvertisementService.add(values)
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="jobPosition.id">İş Pozisyonu</label>
                        <Field as="select" className="form-control" type="number" id="jobPosition.id" name="jobPosition.id" placeholder="İş Pozisyonu">
                            <option></option>
                            {
                                jobPositions.map(jp=>(
                                    <option value={jp.id} key={jp.id}>
                                        {jp.name}
                                    </option>
                                    ))
                            }
                        </Field>
                        <label htmlFor="city.id">Şehir</label>
                        <Field as="select" className="form-control" type="number" id="city.id" name="city.id" placeholder="Şehir">
                            <option></option>
                            {
                                cities.map(c=>(
                                    <option value={c.id} key={c.id}>
                                        {c.name}
                                    </option>
                                ))
                            }
                        </Field>
                        <label htmlFor="workingType.id">Çalışma Tipi</label>
                        <Field as="select" className="form-control" type="number" id="workingType.id" name="workingType.id" placeholder="Çalışma Tipi">
                            <option></option>
                            {
                                workingTypes.map(wt=>(
                                    <option value={wt.id} key={wt.id}>
                                        {wt.name}
                                    </option>
                                ))
                            }
                        </Field>
                        <label htmlFor="workingTime.id">Çalışma Zamanı</label>
                        <Field as="select" className="form-control" type="number" id="workingTime.id" name="workingTime.id" placeholder="Çalışma Zamanı">
                            <option></option>
                            {
                                workingTimes.map(wt=>(
                                    <option value={wt.id} key={wt.id}>
                                        {wt.name}
                                    </option>
                                ))
                            }
                        </Field>
                        <label htmlFor="numberOfPositions">Pozisyon Adedi</label>
                        <Field className="form-control" type="number" id="numberOfPositions" name="numberOfPositions" placeholder="Pozisyon Sayısı"/>
                        <label htmlFor="minSalary">Minimum Maaş</label>
                        <Field className="form-control" type="number" id="minSalary" name="minSalary" placeholder="Minimum Maaş"/>
                        <label htmlFor="maxSalary">Maximum Maaş</label>
                        <Field className="form-control" type="number" id="maxSalary" name="maxSalary" placeholder="Maximum Maaş"/>
                        <label htmlFor="description">Açıklama</label>
                        <Field className="form-control" type="text" id="description" name="description" placeholder="Açıklama"/>
                        <label htmlFor="applicationDeadline">Son Geçerlilik Tarihi</label>
                        <Field className="form-control" type="date" id="applicationDeadline" name="applicationDeadline" />
                        <label htmlFor="status">Herkese Açık</label>
                        <Field className="form-check" type="checkbox" id="status" name="status"/>
                        <button className='btn btn-success' type="submit" disabled={isSubmitting}>
                            Ekle
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}