import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import PlexRequestForm from "../components/Plex/requestForm"
import Navigation from "../components/navigation"

const PlexRequests = () => (
    <Layout>
      <Parallax pages={5}>
        <Navigation />
        <PlexRequestForm />
      </Parallax>
    </Layout>
)

export default PlexRequests