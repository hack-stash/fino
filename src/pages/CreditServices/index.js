import React, { Component } from "react";
import { Form, Input, InputNumber, Button, message } from 'antd';
import { Link } from "react-router-dom";

import "./index.scss";

class CreditServicesPage extends Component {

	state = {
		credits: [
			{
				id: 0,
				bank: "Bank #1",
				rate: "11,9%",
				payment: "4 703 ₽",
				pledge: "Поручитель",
				term: "24 месяца",
				sended: false
			},
			{
				id: 1,
				bank: "Bank #2",
				rate: "10,7%",
				payment: "6 003 ₽",
				pledge: "Отсутствует",
				term: "24 месяца",
				sended: false
			},
			{
				id: 2,
				bank: "Bank #3",
				rate: "9,6%",
				payment: "5 905 ₽",
				pledge: "Отсутствует",
				term: "24 месяца",
				sended: true
			},
			{
				id: 3,
				bank: "Bank #4",
				rate: "10,3%",
				payment: "3 002 ₽",
				pledge: "Поручитель",
				term: "24 месяца",
				sended: false
			},
			{
				id: 4,
				bank: "Bank #5",
				rate: "16,3%",
				payment: "3 002 ₽",
				pledge: "Отсутствует",
				term: "36 месяца",
				sended: false
			},
			{
				id: 5,
				bank: "Bank #6",
				rate: "8,3%",
				payment: "5 009 ₽",
				pledge: "Отсутствует",
				term: "24 месяца",
				sended: false
			},
			{
				id: 6,
				bank: "Bank #7",
				rate: "16,3%",
				payment: "3 002 ₽",
				pledge: "Отсутствует",
				term: "36 месяца",
				sended: false
			},
		]
	}

	sendTicket(index) {
		const credits = this.state.credits.slice();
		credits[index].sended = true;

		this.setState({
			credits
		});
		message.success("Заявка добавлена в обработку");
	}

	render() {

		return (
			<main className="credit-services-page">
				<div className="params-container">
					<div className="main">
						<div className="title">
							Параметры подбора
              			</div>
						<div>
							<div className="card mt-4 mb-4">
								<div className="card-body">
									<h5 className="card-title">Параметры поиска</h5>
									<p className="card-text">Задайте параметры и мы поможем подобрать наилучшие для вас продукты</p>
									<form>
										<div className="form-group">
											<label >Сумма кредита</label>
											<input className="form-control" placeholder="Сумма кредита" />
											<small className="form-text text-muted">Укажиет необходимую сумму кредита</small>
										</div>
										<div className="form-group">
											<label>Срок кредита</label>
											<select className="form-control">
												<option>1 год</option>
												<option>2-3 года</option>
												<option>3-5 лет</option>
											</select>
										</div>
										<div className="form-group">
											<label >Величина платежа</label>
											<input className="form-control" placeholder="Величина платежа" />
											<small className="form-text text-muted">Укажиет желаемый месячный платёж</small>
										</div>
										<button className="btn btn-light float-right">Расширенный фильтр</button>
									</form>
								</div>
							</div>
						</div>
						<div className="result-title">
							Подходящие кредиты
						</div>
					</div>
				</div>
				<div className="credits">
					<div className="main">
						<div className="table">
							<div className="title row">
								<div className="column">
									Наименование банка
								</div>
								<div className="column">
									Процентная ставка
								</div>
								<div className="column">
									Размер платежа
								</div>
								<div className="column">
									Период
								</div>
								<div className="column">
									Залог
								</div>
								<div className="column">

								</div>
							</div>
							{
								this.state.credits.map((credit, index) => {
									return (
										<div key={credit.id} className="row">
											<div className="column">
												{
													credit.bank
												}
											</div>
											<div className="column column-rate">
												{
													credit.rate
												}
											</div>
											<div className="column">
												{
													credit.payment
												}
											</div>
											<div className="column">
												{
													credit.term
												}
											</div>
											<div className="column">
												{
													credit.pledge
												}
											</div>
											<div className="column send-ticket">
												<Button
													disabled={credit.sended}
													size={"large"}
													className={!credit.sended ? "active" : "passive"}
													onClick={e => this.sendTicket(index)}
												>
													{!credit.sended ? "Отправить заявку" : "Будет отправлена"}
												</Button>
											</div>
										</div>
									)
								})
							}
						</div>
						<div className="next-step">
							<Link to="/business-plan">Продолжить</Link>
						</div>
					</div>
				</div>
			</main>)
	}
}

export default CreditServicesPage;
