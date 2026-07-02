import React from 'react'

const VisionMission = () => {
    return (
        <div className="w-full px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision */}
                    <div className="flex flex-col h-full">
                        <h3 className="font-[Nunito] font-semibold text-[24px] text-[#D4600A] leading-6 mb-3">
                            Vision
                        </h3>
                        <div className="w-full h-px bg-[#D4600A] mb-6"></div>
                        <p className="font-[Montserrat] font-normal text-[16px] leading-[24px] text-[#757A79] grow">
                            Dronacharya envisions to nurture and train students with ethical values,
                            vibrant knowledge and professional skills, so that they become a useful
                            instrument in the development of nation and peace.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="flex flex-col h-full">
                        <h3 className="font-[Nunito] font-semibold text-[24px] text-[#D4600A] leading-6 mb-3">
                            Mission
                        </h3>
                        <div className="w-full h-px bg-[#D4600A] mb-6"></div>
                        <p className="font-[Montserrat] font-normal text-[16px] leading-[24px] text-[#757A79] flex-grow">
                            Total commitment to excellence in professional education and research with holistic concern for
                            quality of life, environment and ethics, To engender this, Dronacharya has a passionate, enthusiastic,
                            innovative and dynamic work force where in individual has been
                            chosen on the basis of his/her talent and aptitude irrespective of age & designation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMission