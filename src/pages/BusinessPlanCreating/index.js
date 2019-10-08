import React, { Component } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { Link } from "react-router-dom";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import "./index.scss";

class BusinessPlanPage extends Component {

  openFirst() {
    document.querySelector("#btnFirst").className="nav-link active";
    document.querySelector("#btnSecond").className="nav-link";
    document.querySelector("#btnThird").className="nav-link";
    document.querySelector("#btnFourth").className="nav-link";

    document.querySelector("#tabFirst").className="card-body";
    document.querySelector("#tabSecond").className="card-body d-none";
    document.querySelector("#tabThird").className="card-body d-none";
    document.querySelector("#tabFourth").className="card-body d-none";
  }

  openSecond() {
    document.querySelector("#btnFirst").className="nav-link";
    document.querySelector("#btnSecond").className="nav-link active";
    document.querySelector("#btnThird").className="nav-link";
    document.querySelector("#btnFourth").className="nav-link";

    document.querySelector("#tabFirst").className="card-body d-none";
    document.querySelector("#tabSecond").className="card-body";
    document.querySelector("#tabThird").className="card-body d-none";
    document.querySelector("#tabFourth").className="card-body d-none";
  }
  
  openThird() {
    document.querySelector("#btnFirst").className="nav-link";
    document.querySelector("#btnSecond").className="nav-link";
    document.querySelector("#btnThird").className="nav-link active";
    document.querySelector("#btnFourth").className="nav-link";

    document.querySelector("#tabFirst").className="card-body d-none";
    document.querySelector("#tabSecond").className="card-body d-none";
    document.querySelector("#tabThird").className="card-body";
    document.querySelector("#tabFourth").className="card-body d-none";
  }

  openFourth() {
    document.querySelector("#btnFirst").className="nav-link";
    document.querySelector("#btnSecond").className="nav-link";
    document.querySelector("#btnThird").className="nav-link";
    document.querySelector("#btnFourth").className="nav-link active";

    document.querySelector("#tabFirst").className="card-body d-none";
    document.querySelector("#tabSecond").className="card-body d-none";
    document.querySelector("#tabThird").className="card-body d-none";
    document.querySelector("#tabFourth").className="card-body";
  }

  render() {

    return (
      <main className="business-plan-page main">
        <div className="params-container">
					<div className="main">
						<div className="title">
							Генератор бизнес-плана
            </div>
					</div>
				</div>
        <div className="container mt-4 mb-4">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#" id="btnFirst" onClick={e => this.openFirst()}>Продукт</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="btnSecond" onClick={e => this.openSecond()}>Рынок</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="btnThird" onClick={e => this.openThird()}>Покупатели</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" id="btnFourth" onClick={e => this.openFourth()}>Производство</a>
                </li>
              </ul>
            </div>
            <div className="card-body" id="tabFirst">
              <h5 className="card-title">Описание продукта</h5>
              <p className="card-text">В этом разделе надо детально описать услугу или товар, который вы предлагаете, и проанализировать их потенциал. Вы можете сравнить свой товар с аналогичными и предложить варианты совершенствования своего продукта.</p>
              <form>
                <div className="form-group">
                  <label>Вид бизнеса</label>
                  <input className="form-control" placeholder="Вид бизнеса" />
                  <small className="form-text text-muted">Чем вы занимаетесь?</small>
                </div>
                <div className="form-group">
                  <label>Товар/услуг</label>
                  <input className="form-control" placeholder="Товар/услуг" />
                  <small className="form-text text-muted">Что вы продаете?</small>
                </div>
                <div className="form-group">
                  <label>Актуальность</label>
                  <input className="form-control" placeholder="Актуальность" />
                  <small className="form-text text-muted">Чем акутален ваш проект?</small>
                </div>
                <div className="form-group">
                  <label>Варианты развития</label>
                  <input className="form-control" placeholder="Варианты развития" />
                  <small className="form-text text-muted">Как вы планирете развиваться?</small>
                </div>
                <div id="summernote1">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Описание продукта"
                  ></Editor>
                </div>
                <a style={{
                  color: "#fff"
                }}  onClick={e => this.openSecond()} className="btn btn-primary mt-3 float-right">Дальше</a>
              </form>

            </div>
            <div className="card-body d-none" id="tabSecond">
              <h5 className="card-title">Анализ рынка</h5>
              <p className="card-text">Из уже разработанной бизнес-стратегии перенесите в бизнес-план анализ рынка. Предложения конкурентов стоит рассмотреть еще более детально.</p>
              <form>
                <div className="form-group">
                  <label>Конкуренты</label>
                  <input className="form-control" placeholder="Конкуренты" />
                  <small className="form-text text-muted">С кем вы конкурируете?</small>
                </div>
                <div className="form-group">
                  <label>Доля рынка</label>
                  <input className="form-control" placeholder="Доля рынка" />
                  <small className="form-text text-muted">Какую долю рынка вы занимаете?</small>
                </div>
                <div id="summernote2">
                 <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Описание рынка"
                  ></Editor>
                </div>
                <a style={{
                  color: "#fff"
                }}  onClick={e => this.openThird()} className="btn btn-primary mt-3 float-right">Дальше</a>
              </form>
            </div>
            <div className="card-body d-none" id="tabThird">
              <h5 className="card-title">Характеристики потенциальных покупателей</h5>
              <p className="card-text">Подробно опишите, на кого вы ориентируетесь, кому будете предлагать свой товар или услугу. Ответ: «Всем» – неверный. Это все равно что палить из пушки по воробьям. На этапе составления бизнес-стратегии вы должны были определить свою целевую аудиторию.</p>
              <form>
                <div className="form-group">
                  <label>Потребители</label>
                  <input className="form-control" placeholder="Потребители" />
                  <small className="form-text text-muted">Для кого предназначен ваш товар/услуга?</small>
                </div>
                <div id="summernote3">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Введите описание вашего потребителя"
                  ></Editor>
                </div>
                <a style={{
                  color: "#fff"
                }} onClick={e => this.openFourth()} className="btn btn-primary mt-3 float-right">Дальше</a>
              </form>
            </div>
            <div className="card-body d-none" id="tabFourth">
              <h5 className="card-title">Производственный план</h5>
              <p className="card-text">Для расчета себестоимости вам нужно оценить:прямые затраты на производство или закупку сырья и упаковки у поставщика,оплату труда сотрудников в расчете на единицу товара,косвенные затраты,затраты на рекламу и продвижение,финансовые затраты на обслуживание кредита или займа.</p>
              <form>
                <div className="form-group">
                  <label>Прямые затраты</label>
                  <input className="form-control" placeholder="Прямые затраты" />
                  <small className="form-text text-muted">Затраты на сырье/материалы и производство</small>
                </div>
                <div className="form-group">
                  <label>Оплата труда</label>
                  <input className="form-control" placeholder="Оплата труда" />
                  <small className="form-text text-muted">Оплата труда в расчете на единицу товара</small>
                </div>
                <div className="form-group">
                  <label>Косвенные затраты</label>
                  <input className="form-control" placeholder="Косвенные затраты" />
                  <small className="form-text text-muted">Затраты на аренду,коммунальные услуги</small>
                </div>
                <div className="form-group">
                  <label>Затраты на рекламу</label>
                  <input className="form-control" placeholder="Затраты на рекламу" />
                  <small className="form-text text-muted">Затраты на рекламу и продвижение</small>
                </div>
                <div className="form-group">
                  <label>Финансовые затраты</label>
                  <input className="form-control" placeholder="Финансовые затраты" />
                  <small className="form-text text-muted">Финансовые затраты на обслуживание кредитов и займов</small>
                </div>
                  <Link className="btn btn-primary mt-3 float-right" to="/waiting">Завершить</Link>
              </form>
            </div>
          </div>

        </div>
      </main>)
  }
}

export default BusinessPlanPage;
