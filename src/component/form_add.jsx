import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FormAdd() {
    return (
        <main style={{minHeight: '30vh'}}>
            <h2 className="text-center text-white m-auto" style={{backgroundColor: 'rgb(218, 191, 141)', width: '90%'}}>Добавить объявление</h2>
            <form className="row g-3" style={{marginLeft: '10%'}}>
                <div className="col-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"></input>
                </div>
                <div className="">
                    <label htmlFor="inputAddress" className="form-label">Адрес, где пропало животное</label>
                    <input type="text" className="form-control" id="inputAddress" required placeholder="Авиаконструкторов 28а"></input>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Район, где скорее всего находится</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Приморский"></input>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Ваш город</label>
                    <input type="text" className="form-control" id="inputCity" required></input>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Ваша область</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        <option>Санкт-петербург</option>
                        <option>Москва</option>
                        <option>Московская область</option>
                        <option>Ленинградская область</option>
                    </select>
                </div>
                <label htmlFor="inputState" className="form-label">Вид животного</label>
                <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                    <option>Кот(кошка)</option>
                    <option>Собака</option>
                    <option>Крокодил</option>
                    <option>Сова</option>
                    <option>Крыса</option>
                    <option>Черепаха</option>
                    <option>Хомяк</option>
                    <option>другое(варианта в списке нет)</option>
                </select>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-form-label">Порода(необязательно)</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="inputPassword3"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="input3" className="col-form-label">добавьте комментарий(по желанию)</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="input7"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="input2" className="col-form-label" type="text">Введите данные для связи (телефон) или любые другие данные</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="input8" required></input>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02"></input>
                    <label className="input-group-text" htmlFor="inputGroupFile02">Загрузите фото своего питомца</label>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: 'rgb(218, 191, 141)', width: '10%'}}>Разместить объвление</button>
                </div>

            </form>
        </main>
    );
}

export default FormAdd;