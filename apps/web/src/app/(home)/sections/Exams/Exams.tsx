"use client";

import moment from "moment";
import cn from "classnames";
import { useState } from "react";
import styles from "./Exams.module.scss";
import "moment/locale/ru";

const exams = [
	{
		title: "ОГЭ",
		deadlines: [
			{
				title: "основные сроки",
				dateStart: "20240524T000000+0800",
				dateEnd: "20240614T000000+0800",
				exams: [
					{
						title: "Иностранные языки",
						date: "20240524T000000+0800",
					},
					{
						title: "Иностранные языки",
						date: "20240525T000000+0800",
					},
					{
						title: "Биология, обществознание, химия",
						date: "20240527T000000+0800",
					},
					{
						title: "География, история, физика, химия",
						date: "20240530T000000+0800",
					},
					{
						title: "Русский язык",
						date: "20240603T000000+0800",
					},
					{
						title: "Математика",
						date: "20240606T000000+0800",
					},
					{
						title: "География, информатика, обществознание",
						date: "20240611T000000+0800",
					},
					{
						title: "Биология, информатика, литература, физика",
						date: "20240614T000000+0800",
					},
				],
			},
		],
	},
	{
		title: "ЕГЭ",
		deadlines: [
			{
				title: "основные сроки",
				dateStart: "20240523T000000+0800",
				dateEnd: "20240618T000000+0800",
				exams: [
					{
						title: "География, литература, химия",
						date: "20240523T000000+0800",
					},
					{
						title: "Русский язык",
						date: "20240528T000000+0800",
					},
					{
						title: "Математика (база, профиль)",
						date: "20240531T000000+0800",
					},
					{
						title: "Обществознание",
						date: "20240604T000000+0800",
					},
					{
						title: "Информатика",
						date: "20240607T000000+0800",
					},
					{
						title: "Информатика",
						date: "20240608T000000+0800",
					},
					{
						title: "История, физика",
						date: "20240610T000000+0800",
					},
					{
						title: "Биология, иностранные языки (письменная часть)",
						date: "20240613T000000+0800",
					},
					{
						title: "Иностранные языки (устная часть)",
						date: "20240617T000000+0800",
					},
					{
						title: "Иностранные языки (устная часть)",
						date: "20240618T000000+0800",
					},
				],
			},
		],
	},
];

export function Exams(): JSX.Element {
	const [currentExam, setCurrentExam] = useState(0);

	if (!exams.at(currentExam)) {
		return <>{null}</>;
	}

	function changeCurrentExam(i: number) {
		return () => {
			setCurrentExam(i);
		};
	}

	return (
		<article className={cn(styles.section, "wrapper")}>
			<div className={styles.section__main}>
				<div className={styles.heading}>
					<h2 className={styles.heading__title}>Скоро экзамены</h2>
					<div className={styles.selector}>
						<span className={styles.selector__text}>Расписание:</span>
						<div className={styles.selector__buttons}>
							{exams.map((exam, i) => (
								<button
									className={cn(styles.selector__button, {
										[styles.selector__button_active]: currentExam === i,
									})}
									key={exam.title}
									onClick={changeCurrentExam(i)}
									type="button"
								>
									{exam.title}
								</button>
							))}
						</div>
					</div>
				</div>
				<span className="divider" />
				<div className={styles.exams}>
					{[...exams[currentExam].deadlines[0].exams].map((exam) => {
						const estimated = calculateEstimated(exam.date);

						return (
							<div
								className={cn(styles.exams__exam, { [styles.exams__exam_expired]: estimated < 0 })}
								key={`${exam.title} ${exam.date}`}
							>
								<div className={styles.exams__exam__info}>
									<span className={styles.exams__exam__info__date}>
										{moment(exam.date).format("DD MMMM")}
									</span>
									<span className={styles.exams__exam__info__title}>{exam.title}</span>
								</div>
								{estimated > 1 ? (
									<p className={styles.exams__exam__counter}>
										осталось {estimated} {getDayWordString(estimated)}
									</p>
								) : null}
								{estimated.toString().at(-1) === "1" &&
								(estimated.toString().at(-2) ?? "") + (estimated.toString().at(-1) ?? "") !== "11" ? (
									<p className={styles.exams__exam__counter}>остался {estimated} день</p>
								) : null}
								{estimated === 0 ? <p className={styles.exams__exam__counter}>экзамен сегодня 💀</p> : null}
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles.section__deadlines}>
				<div className={styles.deadline}>
					<h3 className={styles.deadline__title}>{exams[currentExam].deadlines[0].title}</h3>
					<div className={styles.deadline__dates}>
						<h1 className={styles.deadline__dates__date}>
							{moment(exams[currentExam].deadlines[0].dateStart).format("DD MMMM")}
						</h1>
						<h1 className={styles.deadline__dates__date}>
							{moment(exams[currentExam].deadlines[0].dateEnd).format("DD MMMM")}
						</h1>
					</div>
				</div>
			</div>
		</article>
	);
}

function calculateEstimated(date: string | Date): number {
	const d = moment(date);
	return d.diff(moment().hours(0).minutes(0).seconds(0).milliseconds(0), "days");
}

function getDayWordString(days: number): string {
	if (days === 11 || days === 12 || days === 13 || days === 14) {
		return "дней";
	}

	const d = days.toString().at(-1);

	if (!d) {
		return "";
	}

	switch (d) {
		case "0":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			return "дней";

		case "1":
			return "день";

		case "2":
		case "3":
		case "4":
			return "дня";
	}

	return "";
}
