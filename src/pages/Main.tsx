import { observer } from "mobx-react"
import { useContext } from "react"
import { StoreContext } from "../"

import Container from "../components/ordinary/Container/Container"
import LessonCard from "../components/ordinary/LessonCard/LessonCard"
import ProgressBar from "../components/ordinary/ProgressBar/ProgressBar"
import Dropdown from "../components/smart/Dropdown/Dropdown"
import Header from "../components/smart/Header/Header"

const Main = () => {
	const { uiStore } = useContext(StoreContext)

  return (
    <Container>
    <Header>
      <Header.NavBar/>
      <Header.BurgerButton onClick={() => {
        uiStore.toggleDropdown()
      }}/>
      {uiStore.isDropdownOpen && <Dropdown/>}
    </Header>
    
    <div className="schedule_row">
      <ProgressBar
        startTime="8:30"
        endTime="9:50"
      />
      <LessonCard
        teacher=" "
        cabinet=" "
        title=" "
      />
    </div>
    <div className="schedule_row">
      <ProgressBar
        startTime="8:30"
        endTime="9:50"
      />
      <LessonCard
        teacher=" "
        cabinet=" "
        title=" "
      />
    </div>
    <div className="schedule_row">
      <ProgressBar
        startTime="8:30"
        endTime="9:50"
      />
      <LessonCard
        teacher="Name Name Name Name Name Name e Name"
        cabinet="101г"
        title="Some really really really really reeeeeeally long name"
      />
    </div>
  </Container>
  )
}

export default observer(Main)