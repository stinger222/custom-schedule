import { render, screen } from "@testing-library/react"
import LessonCard from "./LessonCard"

const validProps = {
	title: "Название пары",
	teacher: "Имя Перпода",
	cabinet: "202у"
}

const emptyProps = {
	title: "",
	teacher: "",
	cabinet: ""
} 

const spaceStringProps = {
	title: " ",
	teacher: " ",
	cabinet: " "
}

describe('Testing LessonCard render with different props', () => {
	it('renders LessonCard with valid props', () => {
		render(<LessonCard {...validProps}/>)

		expect(screen.getByText('Название пары')).toBeInTheDocument()
		expect(screen.getByText('Имя Перпода')).toBeInTheDocument()
		expect(screen.getByText('каб. 202у')).toBeInTheDocument()
	})

	it('renders LessonCard with empty string porps', () => {
		render(<LessonCard {...emptyProps}/>)

		expect(screen.getByText(/^(<|&lt;)Название пары не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText(/^(<|&lt;)Имя препода не указано(>|&gt;)$/)).toBeInTheDocument()
		expect(screen.getByText('каб. ???')).toBeInTheDocument()
	})
})