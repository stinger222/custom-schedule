import React, { useContext } from "react"
import { StoreContext } from "../../.."
import { observer } from "mobx-react"
import LessonCard from "../../LessonCard/LessonCard"
import Container from "../../Container/Container"
import BreakCard from "../../BreakCard/BreakCard"
import Header from "../../Header/Header"
import StyledMain from "./Main.styled"

const Main = () => {
	let errorMessage: string | null = null
	const { composedSchedulesStore, uiStore, lessonsStore, ringSchedulesStore } = useContext(StoreContext)

	const lessons = lessonsStore.lessons
	const ringSchedules = ringSchedulesStore.schedules

	const selectedDayId = uiStore.selectedDayId

	const selectedDay = composedSchedulesStore.schedules[composedSchedulesStore.schedules.length - 1].week[selectedDayId]
	const selectedDayRings = ringSchedules.find(i => i.id === selectedDay.ring_schedule_id).rings
	
	// i.e data for certain LessonCard and BreackCard
	const getCardsData = (index, itemId) => {
		const lesson = lessons.find(i => i.id === index)
		const lessonRings = selectedDayRings[itemId]
		let breakStart = selectedDayRings[itemId]?.end
		let breakEnd = selectedDayRings[itemId + 1]?.start

		if (itemId + 1 >= selectedDay.lesson_ids.length ) {
			breakEnd = undefined
		}
		return [lesson, lessonRings, breakStart, breakEnd]
	}

	// Amount of lessons greater that amount of rings defined
	if (selectedDay.lesson_ids.length > selectedDayRings.length) {
		errorMessage = 'Количество уроков привышет количество звонков в расписании!'
	}

	return (
		<StyledMain>
			<Header/>
			<Container>
				<button onClick={() => {
					composedSchedulesStore.addSchedule([{
						ring_schedule_id: "rings1",
						lesson_ids: ["1", "1", "1"]
					}])
				}}>CUM</button>
				{errorMessage &&
					<h1
						style={{ textAlign: 'center', color: 'orangered' }}
					>{errorMessage}</h1>
				}
				
				{!errorMessage &&
					selectedDay.lesson_ids.map((index, itemId) => {
						const [ lesson, lessonRings, breakStart, breakEnd ] = getCardsData(index, itemId)

						return <React.Fragment key={itemId}>
							<LessonCard
								cabinet={lesson["cabinet"]}
								startTime={lessonRings["start"]}
								endTime={lessonRings["end"]}
								index={itemId + 1}
								lessonName={lesson["lesson_name"]}
								teacherName={lesson["teacher"]}
							/>
							
							<BreakCard
								startTime={breakStart as string | undefined}
								endTime={breakEnd as string | undefined}
							/>
						</React.Fragment>
					})
				}

			</Container>
		</StyledMain>
	)
}

export default observer(Main)
