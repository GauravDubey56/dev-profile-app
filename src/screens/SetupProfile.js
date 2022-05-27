import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Axios from 'axios';
import { server_url } from '../api/GitHub';
// import { useNavigate } from 'react-router-dom';
function SetupProfile() {
    // const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const body = {
            leetcode : data.get('leetcode'),
            codeforces : data.get('codeforces'),
            username : localStorage.getItem('username')
        }
        console.log(body)
        const res = await Axios.post(server_url+ '/cp', body);
        if(res.status === 200 && res.data['success']){
            const lc = body.leetcode ? "LeetCode" : "";
            const cf = body.codeforces ? "CodeForces" : "";
            const msg = lc != "" && cf != "" ? `${lc} and ${cf} profiles added ` : (lc != "" ? `${lc} profile added` : `${cf} profile added`) ;
            alert(msg)
        } else if(res.status === 200 && !res.data['success']) {
            alert(res.data['msg']);
        } else {
            alert('Sever error')
        }
    }
    return (
        <Grid container spacing={2}>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <h2>Add LeetCode and CodeForces profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="ip1" className="col-sm-2 col-form-label">LeetCode</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ip1" name="leetcode" placeholder="Enter LeetCode handle" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="ip2" className="col-sm-2 col-form-label">CodeForces</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="ip2" name="codeforces" placeholder="Enter Codeforces handle" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </Grid>
            <Grid item xs={3}>
            </Grid>

        </Grid>
    )
}

export default SetupProfile