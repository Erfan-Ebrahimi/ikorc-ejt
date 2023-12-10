import ActionCard from "../ActionCard/ActionCard";
import "./Actions.scss";



const Actions = () => {
  return (
    <section className="my-14">

        <div className="mx-auto w-1/2 text-center">
          <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">فعالیت های اخیر</h2>
          <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b pb-2  border-red-400 text-white">شش ماه اول سال</span>
        </div>
       


      <div className="flex flex-wrap mx-auto w-full justify-center mt-10 gap-y-5 md:gap-10">

        <ActionCard title={'مسابقات شطرنج'} desc={'کسب مقام اول تیمی در مسابقات آزاد هیات شطرنج شازند توسط تیم شطرنج پالایشگاه امام خمینی'} date={'1402/03/01'} img={1} />
        <ActionCard title={'برگزاری مسابقات پیش کسوتان '} desc={'میزبانی پالایشگاه امام خمینی شازند از مسابقات فوتبال پیش کسوتان استان مرکزی'} date={'1402/04/12'} img={2} />
        <ActionCard title={'اکران فیلم و انیمیشن'} desc={'پخش جدیدترین فیلم و انیمیشن های روز جهان در سینمای مجتمع فرهنگی'} date={'1402/04/15'} img={3} />
        <ActionCard title={'همایش پیاده روی خانوادگی'} desc={'برگزاری همایش پیاده روی خانوادگی به مناسبت عید غدیر خم در شهر مهاجران'} date={'1402/05/06'} img={4} />
        <ActionCard title={'اعزام تیم کوه نوردی'} desc={'صعود موفقیت آمیز تیم کوهنوردی پالایشگاه به قله ی غارک'} date={'1402/05/21'} img={5} />
        <ActionCard title={'برگزاری المپیاد جوانان'} desc={'میزبانی پالایشگاه شازند از المپیاد ورزشی فرزندان ذکور کارکنان زیر 25 سال کشور'} date={'1402/06/08'} img={6} />
        <ActionCard title={'برگزاری مسابقات والیبال'} desc={'برگزاری مسابقات والیبال به میزبانی پالایشگاه شازند و کسب مقام سوم تیمی'} date={'1402/07/22'} img={7} />
        <ActionCard title={'اردوی زیارتی'} desc={'برگزاری اردوی یک روزه زیارتی قم با حضور خانواده کارکنان پالایشگاه شازند'} date={'1402/07/25'} img={8} />
        <ActionCard title={'تیم دو میدانی'} desc={'کسب مقام اول تیمی - امدادی در مسابقات فرزندان کارکنان شرکتملی پالایش و پخش کشور'} date={'1402/08/09'} img={9} />
        <ActionCard title={'اعزام تیم امدادی'} desc={'اعزام تیم امدادی پالایشگاه شازند به مناطق زلزله زده کرمانشاه'} date={'1402/08/10'} img={10} />
      </div>
    </section>
  )
}

export default Actions;