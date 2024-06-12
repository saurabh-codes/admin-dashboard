import React from 'react'
import LeftDasboard from './components/LeftDasboard'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { faCouch, faUser } from '@fortawesome/free-solid-svg-icons'
import Graph from './components/Graph'

function Home() {
    return (
        <div className='home'>
            <div className='left-section'>
                <LeftDasboard />
            </div>
            <div className='right-section'>
                <div className='top'><Navbar /></div>
                <div className='center'>

                    <div className='centre-div'><Card icon={faCouch} money="Today's Money" moneyValue="$55k" percentage="+55%" time="than last week"/></div>
                    <div className='centre-div'><Card icon={faUser} money="Today's Users" moneyValue="2,300" percentage="+3%" time="than last month"/></div>
                    <div className='centre-div'><Card icon={faUser} money="New Cilents" moneyValue="3,460" percentage="+5%" time="than yesterday"/></div>
                    <div><Card icon={faCouch} money="Sales" moneyValue="$550,103k" percentage="+5%" time="than yesterday"/></div>
                </div>
                <div className='bottom'>
                    <Graph/>
                </div>


            </div>
        </div>

    )
}

export default Home