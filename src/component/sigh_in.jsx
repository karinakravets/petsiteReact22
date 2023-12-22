import React from 'react';

const MyForm = () => {
    return (
        <form className="row mb-3 md-6">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Эл. почта
            </label>
            <div className="col-sm-8">
                <input type="email" className="form-control" id="inputEmail3" />
            </div>
            <div className="row mb-3 md-6">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Пароль
                </label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4 offset-sm-2">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                        />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            я соглашаюсь на рассылку по электронной почте
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button
                    type="submit"
                    className="btn btn-primary m-auto"
                    style={{ backgroundColor: 'rgb(218, 191, 141)', width: '10%' }}
                >
                    Войти
                </button>
            </div>
        </form>
    );
};

export default MyForm;