import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import DonateForm from "../components/donate"
import Navigation from "../components/navigation"

const Contact = () => (
    <Layout>
        <Parallax pages={1}>
            <Navigation />
            <DonateForm offset={0} factor={1} />
        </Parallax>
    </Layout>
)

export default Contact