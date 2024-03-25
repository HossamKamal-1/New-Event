import MainHeading from '../../components/mainheading';
import {
  ProgramsContent,
  ProgramsDesc,
  ProgramsWrapper,
  TabSpan,
  TabsButtons,
} from './style';
import { programsList } from '../../constants/data';
import Program from '../../components/program';
import { useMemo, useState } from 'react';
function ProgramsSection() {
  const [activeDay, setActiveDay] = useState('one');
  const programsToRender = useMemo(
    () => programsList.filter(({ day }) => day === activeDay),
    [activeDay]
  );
  return (
    <ProgramsWrapper id="programs">
      <div className="container">
        <ProgramsContent>
          <MainHeading>Our Programs</MainHeading>
          <ProgramsDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            pariatur voluptates omnis eos explicabo. Perferendis quos ratione
            libero facere!
          </ProgramsDesc>
          <div className="tabs">
            <TabsButtons>
              <TabSpan
                onClick={() => setActiveDay('one')}
                className={`${activeDay === 'one' ? 'active' : ''}`}
              >
                First Day
              </TabSpan>
              <TabSpan
                onClick={() => setActiveDay('two')}
                className={`${activeDay === 'two' ? 'active' : ''}`}
              >
                Second Day
              </TabSpan>
              <TabSpan
                onClick={() => setActiveDay('three')}
                className={`${activeDay === 'three' ? 'active' : ''}`}
              >
                Third Day
              </TabSpan>
            </TabsButtons>
            <div className="tab-content">
              {programsToRender.map((program) => (
                <Program {...program} key={program.id} />
              ))}
            </div>
          </div>
        </ProgramsContent>
      </div>
    </ProgramsWrapper>
  );
}
export default ProgramsSection;
