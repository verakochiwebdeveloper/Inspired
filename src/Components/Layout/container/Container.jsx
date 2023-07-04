import cn from 'classnames';
import styleContainer from './Container.module.scss';

export const Container = (props) => (
    <div className={cn('styleContainer.container', props.className)}>{props.children}</div>
)