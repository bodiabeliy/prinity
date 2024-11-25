"use client";
import React, { PureComponent } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const FeedBackScreen = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Kostiantyn",
      text: "Богдан - відмінний виконавець з досвідом роботи. Він робить більше, ніж від нього просиш і піклується кінцевим результатом. Також протягом співпраці мені сподобалась манера спілкування Богдана, і те що він швидко вчиться. Повністю можу рекомендувати співпрацю з Богданом.",
      avatarUrl: "https://ui-avatars.com/api/name=Kostiantyn&background=random",
      replies: [],
    },
    {
      userId: "32b",
      comId: "021",
      fullName: "Derryl",
      text: "Excellent communication, quick completion of the task, great job done, 10/10 !",
      avatarUrl: "https://ui-avatars.com/api/name=Derryl&background=random",
      replies: [],
    },
    {
      userId: "42b",
      comId: "021",
      fullName: "Derryl",
      text: "Everything looks super, as it should!",
      avatarUrl: "https://ui-avatars.com/api/name=Derryl&background=random",
      replies: [],
    },
    {
    userId: "22b",
    comId: "019",
    fullName: "leon_sheff",
    text: "Відмінна робота!",
    avatarUrl: "https://ui-avatars.com/api/name=leon_sheff&background=random",
    replies: [],
    }
  ];
  return (
    <>
      <div className="feedback-section wrapper">
        <div className="body">
          <div className="feedback-section-content content">
            <p className="text">Customer`s review</p>
            <span className="description"></span>
            <div className="">
              <CommentSection
                currentUser={{
                  currentUserId: "01a",
                  currentUserImg:
                    "https://ui-avatars.com/api/name=Riya&background=random",
                  currentUserProfile:
                    "https://www.linkedin.com/in/riya-negi-8879631a9/",
                  currentUserFullName: "Riya Negi",
                }}
                logIn={{
                  loginLink: "http://localhost:3001/",
                  signupLink: "http://localhost:3001/",
                }}
                commentData={data}
                onSubmitAction={(data: {}) =>
                  console.log("check submit, ", data)
                }
                currentData={(data: any) => {
                  console.log("curent data", data);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackScreen;
