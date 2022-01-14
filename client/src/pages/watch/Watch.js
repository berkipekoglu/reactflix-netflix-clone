import './Watch.scss'
import {ArrowBackIosOutlined} from '@mui/icons-material'

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://stream.mux.com/hjbTB02FUjwo8UfHhauHmV1uBGWcPp1L6/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NDIxNzg0NTgsImF1ZCI6InYiLCJzdWIiOiJoamJUQjAyRlVqd284VWZIaGF1SG1WMXVCR1djUHAxTDYifQ.NVQOjOY68Q3a4e-ru9ekN8xviBGxaTF3yGxU7ZxEmflFs7_l3vhEDFonlWmZfP29GBLuXEXa6gKKvEnAbqwr3Nwy1VV4eqie7kvaB6q5vPDd_6Mn8kfOAYstcsS80sJ-kjLHjAX6I61io_-7RqMXk0QoMZ2JFxbskUjQucZIPlglGSp7P-hfNIF5yqN--JzUnlPVIHtfUjDTJpwoOm0-o1NIzqoWr8l1o3mq1SMa6JL98BQHFJkxhpAQwrXd2JHIRKs7kJ-O8H_QSAE6Z29GaivG5KD2n8Mk3IZT5t0JsRk6b2iCUWCdnxcA1GoARCrx1VGsX4CgQTrWzn2x-SaCsg" />
        </div>
    )
}
