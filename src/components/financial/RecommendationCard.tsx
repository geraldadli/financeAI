import React from 'react';
import { RecommendationType } from '../../types/financial';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, TrendingUp, Lightbulb, Coins } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: RecommendationType;
  type: 'saving' | 'investment' | 'tax';
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation, type }) => {
  // Determine icon and color based on recommendation type
  const getTypeInfo = () => {
    switch (type) {
      case 'saving':
        return {
          icon: <Lightbulb className="h-5 w-5 text-amber-500" />,
          bgColor: 'bg-amber-50',
          textColor: 'text-amber-700',
        };
      case 'investment':
        return {
          icon: <TrendingUp className="h-5 w-5 text-teal-500" />,
          bgColor: 'bg-teal-50',
          textColor: 'text-teal-700',
        };
      case 'tax':
        return {
          icon: <Coins className="h-5 w-5 text-navy-500" />,
          bgColor: 'bg-navy-50',
          textColor: 'text-navy-700',
        };
    }
  };

  const { icon, bgColor, textColor } = getTypeInfo();

  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-3 mb-3">
        <div className={`p-2 rounded-lg ${bgColor}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-medium text-gray-800">{recommendation.title}</h4>
          {'relevance' in recommendation && (
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${textColor} ${bgColor} mt-1`}>
              {recommendation.relevance} relevance
            </span>
          )}
          {'difficulty' in recommendation && (
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${textColor} ${bgColor} mt-1`}>
              {recommendation.difficulty} difficulty
            </span>
          )}
          {'risk' in recommendation && (
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${textColor} ${bgColor} mt-1`}>
              {recommendation.risk} risk
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{recommendation.description}</p>
      
      <div className="flex justify-between items-center">
        <div>
          {'potentialSaving' in recommendation && (
            <p className="text-amber-600 font-medium">
              Save up to ${recommendation.potentialSaving.toLocaleString()}
            </p>
          )}
          {'potentialReturn' in recommendation && (
            <p className="text-teal-600 font-medium">
              Potential return: {recommendation.potentialReturn}%
            </p>
          )}
        </div>
        <Button variant="ghost" size="sm" className={textColor}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default RecommendationCard;