import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DashboardTypes } from '../redux/action_types/Dashboard_type';
import {Table} from 'react-bootstrap'

//get user by id
// https://reqres.in/api/users/2

const Profile = () => {
    const dataredux = useSelector((state) => state.Dashboard);

    const dispatch = useDispatch();
    const { id } = useParams();

    const getData = async () => {
        // const url=`https://reqres.in/api/users/${id}`
        // const res= await axios.get(url)


        dispatch({
            type: DashboardTypes.PERSON_REQUST, data: { id },
            callback: () => {

            },

        })

    }

    useEffect(() => {
        getData();
    }, [id])

    const user = dataredux.Persondata;
    console.log("list", user)
    return (
        <div className='text-center' >

            {
                user &&

                <Table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </Table>




            }


        </div>
    )
}

export default Profile;