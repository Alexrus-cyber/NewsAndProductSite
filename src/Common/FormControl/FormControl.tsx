import {Field, WrappedFieldProps} from "redux-form";
import {FC} from "react";
import styles from "./FormControl.module.css"
import {FieldValidatorType} from "../../Utils/Validators/Validators";

export const TextAreaForm: FC<WrappedFieldProps> = ({input, meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return (
        <div className={styles.text}>
            <textarea className={showError ? styles.textAreaError : styles.textArea} {...input} {...props}/>
            <div>{touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}

export const InputLogin: FC<WrappedFieldProps>  = ({input, meta: {error, warning, touched}, ...props}) => {
    const showError = touched && error;
    return (
        <div>
            <div className={styles.flex}>
                <input className={showError ? styles.inputError : styles.input} {...input} {...props}></input>
            </div>
            <div>{touched &&
                ((error && <span className={styles.error}>{error}</span>) ||
                    (warning && <span className={styles.warning}>{warning}</span>))} </div>
        </div>
    )
}

export function FieldCreator<FormKeysType extends string>(name: FormKeysType,
                                                          placeholder: string | null,
                                                          validators: Array<FieldValidatorType>,
                                                          component: FC<WrappedFieldProps>,
                                                          className?: string | null,
                                                          type?: string | null) {
    return (
        <div className={className ? className : ""}>
            <Field name={name} placeholder={placeholder} validate={validators} component={component} type={type}/>
        </div>
    )
}