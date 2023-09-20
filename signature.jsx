import { useState } from 'react';
import './signature.css';
import Title from './title';


export function SIG() {
    const [name, setName] = useState('AAA');
    const [date, setDate] = useState('DOB');

    return (
        <div className='container-fluid'>
            <h2 className='text-center'>Signature App</h2>
            <Title text={name} />
            <Title text={date} />

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum impedit fugiat nobis fuga quas possimus neque illo doloribus nisi voluptate labore culpa praesentium voluptates alias et quis aperiam cumque, quos id dolor omnis dolore tempora molestiae. Illum animi, sapiente quam, beatae iste corporis praesentium vitae dolore eum non magnam ratione, quasi libero! Facere nisi illo doloremque incidunt nobis. Obcaecati quod eos asperiores dicta sapiente eveniet hic sequi laudantium repudiandae, tempore amet delectus. Animi reprehenderit omnis non commodi, recusandae sint! Consequatur officiis officia unde eveniet eos dolores? Cumque provident, reprehenderit amet eos nam iste libero iusto obcaecati. Illum deserunt laborum totam?</p>

            <div className='d-flex input-boxes'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
        </div>
    )
}