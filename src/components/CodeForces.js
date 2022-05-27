import React from 'react'
import { Grid } from '@material-ui/core'
import CodeForcesInfo from './CodeForcesInfo'
import CodeForcesBlogs from './CodeForcesBlogs'
import CodeForcesContests from './CodeForcesContests'
function CodeForces() {
    const data = {
        info: {
            handle: 'GauravDubey65',
            class: 'Expert',
            currentRating: 1600,
            joinDate: "21 Dec 2018",
            problemsCount: 900
        },
        contestList: [
            { contestName: "Cf round 1000", rank: 200, oldRating: 200, newRating: 190 },
            { contestName: "Cf round 000", rank: 200, oldRating: 200, newRating: 190 },
            { contestName: "Cf round 100", rank: 200, oldRating: 200, newRating: 190 },
        ],
        blogList: [
            { title: "Cf round 100", url: "www.codeforces.com" },
            { title: "Cf round 0", url: "www.codeforces.com" },
            { title: "Cf round 000", url: "www.codeforces.com" },
        ]
    }
    return (
        <Grid container spacing={2}>
            <Grid xs={3}>
                <CodeForcesInfo {...data.info} />
            </Grid>
            <Grid xs={3}>
                <CodeForcesBlogs {...data} />
            </Grid>
            <Grid xs={3}>
                <CodeForcesContests {...data} />
            </Grid>
        </Grid>
    )
}

export default CodeForces