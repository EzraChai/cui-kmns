import { Card, CardContent } from "@/components/ui/card";
import { mashanzheng } from "./layout";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <main className=" min-h-screen max-w-7xl px-4 pt-12 mx-auto">
        <div
          className={`${mashanzheng.className} flex justify-center flex-col `}
        >
          <div>
            <h1 className="text-center text-[14rem] lg:text-[28rem]">脆</h1>
          </div>
          <div className="col-span-2 flex  items-center ">
            <p className=" lg:w-4/5 mx-auto text-lg lg:text-xl text-neutral-700 dark:text-neutral-300">
              &quot;脆&quot;文化起源于2023年7月10日,由麦索阁同志启发。初始成员约15位
              first intake 的KMNS同志组成。过后由second intake 和 third intake
              的同志组成一个大约50位属于男人的团体。
            </p>
          </div>
        </div>

        <div className="mt-28 mb-14">
          <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
            成员介绍
          </h3>
          <div className="mt-4 lg:mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Card
                key={num}
                className=" flex justify-center items-center flex-col border-2 border-black dark:border-white hover:cursor-pointer"
              >
                <div className="p-4">
                  <Skeleton className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"></Skeleton>
                </div>

                <CardContent>
                  <Skeleton className="w-[60px] lg:w-[180px] h-[20px]"></Skeleton>
                  <Skeleton className="mt-4 w-[60px] lg:w-[180px] h-[20px]"></Skeleton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
