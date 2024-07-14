import React from 'react';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
            <header className="text-center py-12 bg-gray-800 text-white">
                <h1 className="text-5xl font-bold">순창군유기견임시보호소 보호소</h1>
                <p className="text-xl mt-4">유기견에게 새로운 가족을 찾아주세요</p>
            </header>
            <section className="my-12 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">소개</h2>
                <p>순창군유기견임시보호소에서 봉사활동을 하는 개인 봉사자가 운영하는 사이트입니다.</p>
                <p>순창군과는 무관하며, 봉사자들의 자발적인 후원으로 운영됩니다.</p>
            </section>
            <section className="my-12 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">입양 절차</h2>
                <ol className="list-decimal list-inside">
                    <li>유기견 목록 확인</li>
                    <li>입양 신청서 작성</li>
                    <li>상담 및 방문</li>
                    <li>입양 확정</li>
                </ol>
            </section>
            <section className="my-12 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">문의하기</h2>
                <p>봉사활동, 입양, 후원관련 문의는 아래 버튼을 눌러주세요.</p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">문의하기</button>
            </section>
        </div>
    );
};

export default HomePage;
