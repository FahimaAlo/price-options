import { LineChart as LChart , Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { id: 1, student: 'Alice', math: 78, physics: 82, chemistry: 75 },
        { id: 2, student: 'Bob', math: 85, physics: 78, chemistry: 80 },
        { id: 3, student: 'Charlie', math: 92, physics: 88, chemistry: 91 },
        { id: 4, student: 'David', math: 66, physics: 72, chemistry: 68 },
        { id: 5, student: 'Ella', math: 74, physics: 79, chemistry: 73 },
        { id: 6, student: 'Frank', math: 89, physics: 85, chemistry: 87 },
        { id: 7, student: 'Grace', math: 81, physics: 83, chemistry: 76 },
        { id: 8, student: 'Hannah', math: 95, physics: 90, chemistry: 94 },
        { id: 9, student: 'Ivy', math: 70, physics: 75, chemistry: 69 },
        { id: 10, student: 'Jack', math: 88, physics: 80, chemistry: 84 }
      ];
      
      

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;